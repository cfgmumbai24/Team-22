import Mentor from "../models/mentor.model.js";

const getMentorDetails = async (req, res) => {
   try {
      // Make a badgeValue field and fill it with badge value based on badge type.
      const mentors = await Mentor.aggregate([
         {
            $project: {
               _id: 0, // Explicitly exclude the default _id field
               name: { $concat: ["$first_name", " ", "$last_name"] }, // Concatenate first and last name
               badges: 1,
               badgeValue: {
                  $sum: [
                     { $multiply: ['$badges.gold', 5] },
                     { $multiply: ['$badges.silver', 3] },
                     { $multiply: ['$badges.bronze', 1] },
                  ]
               }
            }
         },
         { $sort: { badgeValue: -1 } } // Sort by badgeValue in descending order
      ]);
      console.log(mentors);
      return res.status(200).json({
         mentors
      });
   } catch (error) {
      return res.status(404).json({ message: error.message });
   }
};

export default getMentorDetails;
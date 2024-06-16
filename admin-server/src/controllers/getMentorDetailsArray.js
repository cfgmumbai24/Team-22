import Mentor from "../models/mentor.model.js";

const getMentorDetailsArray = async (req, res) => {
   try {
      // Aggregate and find the count of mentor in each district
      const districts = await Mentor.aggregate([
         { $group: { _id: "$district", count: { $sum: 1 } } },
      ]);


      // Aggregate and find the count of mentor for each field
      const fields = await Mentor.aggregate([
         { $group: { _id: "$field", count: { $sum: 1 } } },
      ]);


      return res.status(200).json({
         districts,
         fields
      });
   } catch (error) {
      return res.status(404).json({ message: error.message });
   }
};

export default getMentorDetailsArray;
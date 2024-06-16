import Feedback from "../models/feedback.model.js";

const getFeedback = async (req, res) => {
   try {
      const results = await Feedback.aggregate([
         {
            $lookup: { // Join with Mentor collection
               from: 'Mentor', // Name of the Mentor collection
               localField: 'mentor', // Field in feedback referencing the mentor ID
               foreignField: '_id', // Field in Mentor collection storing the mentor ID
               as: 'mentor' // Alias for the joined mentor documents
            }
         },
         {
            $unwind: '$mentor' // Deconstruct the potentially empty mentor array
         },
         {
            $lookup: { // Join with Student collection
               from: 'Student', // Name of the Student collection
               localField: 'student', // Field in feedback referencing the student ID
               foreignField: '_id', // Field in Student collection storing the student ID
               as: 'student' // Alias for the joined student documents
            }
         },
         {
            $unwind: '$student' // Deconstruct the potentially empty student array
         },
         {
            $project: {
               _id: 0,
               mentorName: { $concat: ["$mentor.first_name", " ", "$mentor.last_name"] },
               studentName: { $concat: ["$student.first_name", " ", "$student.last_name"] },
               feedback: '$feedback',
               date: {
                  $dateToString: { format: "%d-%m-%Y", date: "$date" }
               }
            }
         },
         {
            $sort: { date: -1 } // Sort by date in descending order (most recent first)
         }
      ]);
      return res.status(200).json(results);
   } catch (err) {
      console.error(' Error getting feedback: ', err);
      return res.status(500).send(' Error getting feedback.');
   }
}

export default getFeedback;
import Student from "../models/student.model";
import Mentor from "../models/mentor.model";

const getStudents = async (req, res) => {
   try {
      const mentorId = req.params.id;
      // Aggregate pipeline to get students of a mentor
      const results = await Mentor.aggregate([
         {
            $match: { // Filter mentors by the provided ID
               _id: mongoose.Types.ObjectId(mentorId) // Cast the ID to a valid ObjectId
            }
         },
         {
            $unwind: "$students" // Deconstruct the students array within the mentor document
         },
         {
            $lookup: { // Join with the Student collection
               from: "Student", // Name of the Student collection
               localField: "students", // Field in the mentor document referencing the student ID
               foreignField: "_id", // Field in the Student collection storing the student ID
               as: "student" // Alias for the joined student documents
            }
         },
         {
            $unwind: "$student" // Deconstruct the student array (might be empty if no students)
         },
         {
            $project: { // Define the output structure
               _id: 0, // Exclude default _id field from mentor
               studentId: "$student._id", // Project the student ID
               studentName: { $concat: ["$student.first_name", " ", "$student.last_name"] }, // Student name
               courses: "$student.course", // Enrolled courses
               performance: "$student.performance", // Performance score
            }
         }
      ]);

      return res.status(200).json(results);
   } catch (err) {
      console.log(' Error getting students: ', err);
      return res.status(500).send(' Error getting students.');
   }
};

export default getStudents;
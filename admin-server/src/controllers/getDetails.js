import Student from "../models/student.model.js";

const getDetails = async (req, res) => {
   try {
      // Aggregate and find the count of student in each district
      const districts = await Student.aggregate([
         { $group: { _id: "$district", count: { $sum: 1 } } },
      ]);


      const courses = await Student.aggregate([
         {
            $unwind: "$course" // Deconstruct the course array into separate documents
         },
         {
            $group: {
               _id: "$course", // Group documents by course name
               count: { $sum: 1 }, // Count the number of documents in each group
            }
         },
         {
            $project: {
               courseName: "$_id", // Project the course name field
               count: "$count", // Project the count field
               _id: 0, // Exclude the default "_id" field from the response
            }
         }
      ]);


      // Aggregate and find the count of student for each field
      const fields = await Student.aggregate([
         { $group: { _id: "$field", count: { $sum: 1 } } },
      ]);


      return res.status(200).json({
         districts,
         courses,
         fields
      });
   } catch (error) {
      return res.status(404).json({ message: error.message });
   }
};

export default getDetails;
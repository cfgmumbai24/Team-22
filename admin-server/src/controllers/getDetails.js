import Student from "../models/student.model";
import Mentor from "../models/mentor.model";

const getDetails = async (req, res) => {
   try {
      // Aggregate and find the count of student in each district
      const districts = await Student.aggregate([
         { $group: { _id: "$district", count: { $sum: 1 } } },
      ]);


      const studentCountsByCourses = await Student.aggregate([
         // Lookup course details for each student's course reference
         {
            $lookup: {
               from: 'Course', // Foreign collection name (Course)
               localField: 'course', // Local field referencing course object id
               foreignField: '_id', // Foreign field (Course model's _id)
               as: 'courseDetails', // Alias for the joined course data
            },
         },
         // Unwind the courseDetails array (one course per student)
         { $unwind: "$courseDetails" },
         // Group by course name and count students
         {
            $group: {
               _id: "$courseDetails.name", // Group by course name
               count: { $sum: 1 }, // Count the number of students in each group
            },
         },
      ]);
      const courses = studentCountsByCourses.map((course) => ({
         courseName: course._id, // Extract course name from _id
         count: course.count,
      }));


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
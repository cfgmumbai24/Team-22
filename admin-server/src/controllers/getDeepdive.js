import Student from "../models/student.model";

const getDeepdive = async (req, res) => {
   try {
      // Fetch all students
      const students = await Student.find();

      // Group students by district
      const districtGroups = students.reduce((acc, student) => {
         const { district, field } = student;
         if (!acc[district]) {
            acc[district] = { district, fieldCount: [] };
         }

         // Create or update field count for the district
         const existingField = acc[district].fieldCount.find(f => f.field === field[0]); // Assuming only the first field matters here
         if (existingField) {
            existingField.count++;
         } else {
            acc[district].fieldCount.push({ field: field[0], count: 1 });
         }
         return acc;
      }, {});

      // Convert grouped data to desired response format
      const response = Object.values(districtGroups);

      return res.status(200).json(response);
   } catch (err) {
      console.error(' Error getting student data: ', err);
      return res.status(500).send(' Error processing student data.');
   }
};

export default getDeepdive;
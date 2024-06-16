import Student from "../models/student.model.js";

const getDeepdive = async (req, res) => {
   try {
      // Fetch all students
      const students = await Student.find({});

      // Group students by district
      const districtGroups = students.reduce((acc, student) => {
         const { district, field } = student;
         if (!(district in acc)) {
            acc.district = { district, fieldCount: [] };
         }
         for (let i = 0; i < acc[district].fieldCount.length; i++) {
            const entry = acc[district].fieldCount[i];
            if(entry.field==field) acc[district].fieldCount[i][count]++
        }
         // Create or update field count for the district
         //const existingField = acc[district].fieldCount.find(f => f.field === field); // Assuming only the first field matters here
        //  if (existingField) {
        //     existingField.count++;
        //  } else {
        //     acc[district].fieldCount.push({ field: field, count: 1 });
        //  }
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
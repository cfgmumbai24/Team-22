import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema(
   {
      district: {
         type: String,
         required: [true, 'District 404']
      },
      course: {
         type: [{
            type: Schema.Types.ObjectId,
            ref: 'Course'
         }],
         required: [true, 'Course 404']
      },
      mentor: {
         type: {
            type: Schema.Types.ObjectId,
            ref: 'Mentor'
         },
         required: [true, 'mentor 404']
      },
      field: {
         type: String,
         required: [true, 'field 404']
      },
      performance: {
         type: Number,
         required: [true, 'performance 404']
      },
      enrolled: {
         type: Boolean,
         default: false
      }
   },
   {
      timestamps: true,
   },
);

const Student = mongoose.model('student', studentSchema);

export default Student;
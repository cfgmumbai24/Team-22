import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema(
   {
      first_name: {
         type: String,
         required: [true, 'First name 404']
      },
      last_name: {
         type: String,
         required: [true, 'Last name 404']
      },
      email: {
         type: String,
         required: [true, 'Email 404']
      },
      phone: {
         type: Number,
         required: [true, 'Phone 404']
      },
      bookmarked: {
         type: [String],
         default: [],
      },
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
         // required: [true, 'mentor 404']
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
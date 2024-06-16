import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema(
   {
      first_name: {
         type: String,
         default: "fName"
      },
      last_name: {
         type: String,
         default: "lName"
      },
      email: {
         type: String,
         default: "email@dummy.com"
      },
      phone: {
         type: Number,
         default: 1234567890
      },
      bookmarked: {
         type: [String],
         default: [],
      },
      district: {
         type: String,
         default: "Dummy District"
      },
      course: {
         type : [String],
         default: ["English"]
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
         default: "Law"
      },
      performance: {
         type: Number,
         default: 69
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
import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema(
   {
      first_name: {
         type: String,
         default: 'fName'
      },
      last_name: {
         type: String,
         default: 'fName'
      },
      email: {
         type: String,
         default: 'dummy@email.com'
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
         default: ""
      },
      course: {
         type: [String],
         default: []
      },
      mentor: {
         type: {
            type: Schema.Types.ObjectId,
            ref: 'Mentor'
         },
         // required: [true, 'mentor 404']
      },
      field: {
         type: [String],
         default: []
      },
      performance: {
         type: Number,
         default: 0
      },
      enrolled: {
         type: Boolean,
         default: false
      },
      aadharnumber: {
         type: Number,
         default: 1234567890
      },
      aadaharcard: {
         type: String,
         default: 'dummy'
      },
      address: {
         type: String,
         default: 'home, student - 111222.'
      },
      pancard: {
         type: String,
         default: 'dummy'
      },
      password: {
         type: String,
         default: 'password'
      }
   },
   {
      timestamps: true,
   },
);

const Student = mongoose.model('student', studentSchema);

export default Student;
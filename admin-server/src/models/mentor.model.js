import mongoose, { Schema } from "mongoose";

const mentorSchema = mongoose.Schema(
   {
      first_name: {
         type: String,
         default: 'fName'
      },
      last_name: {
         type: String,
         default: 'lName'
      },
      email: {
         type: String,
         default: 'dummy@email.com'
      },
      address: {
         type: String,
         default: 'home, mentor - 111222.'
      },
      phone: {
         type: Number,
         default: 1234567890
      },
      languages: {
         type: [String],
         default: ['English']
      },
      bio: {
         type: String,
         default: ""
      },
      students: {
         type: [{
            type: Schema.Types.ObjectId,
            ref: 'Student'
         }],
         required: false
      },
      badges: {
         type: {
            gold: {
               type: Number,
               default: 0
            },
            silver: {
               type: Number,
               default: 0
            },
            bronze: {
               type: Number,
               default: 0
            }
         },
         required: [true, 'Badge 404']
      },
      district: {
         type: String,
         default: "unknown"
      },
      aadharcard: {
         type: String,
         default: 'dummy'
      },
      password: {
         type: String,
         default: "password"
      },
      state: {
         type: String,
         default: "unknown"
      },
      age: {
         type: Number,
         default: 18
      },
      field: {
         type: String,
         default: 'English'
      }
   },
   {
      timestamps: true,
   },
);

const Mentor = mongoose.model('mentor', mentorSchema);
export default Mentor;
import mongoose, { Schema } from "mongoose";

const mentorSchema = mongoose.Schema(
   {
      first_name: {
         type: String,
         required: [true, 'Name 404']
      },
      last_name: {
         type: String,
         required: [true, 'Name 404']
      },
      email: {
         type: String,
         required: [true, 'Email 404']
      },
      address: {
         type: String,
         required: [true, 'Address 404']
      },
      phone: {
         type: Number,
         required: [true, 'Phone 404']
      },
      languages: {
         type: [String],
         required: [true, 'Language 404']
      },
      bio: {
         type: String,
         required: [true, 'Bio 404']
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
         required: [true, 'District 404']
      },
   },
   {
      timestamps: true,
   },
);

const Mentor = mongoose.model('mentor', mentorSchema);
export default Mentor;
import mongoose, { Schema } from "mongoose";

const mentorSchema = mongoose.Schema(
   {
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
import mongoose from "mongoose";

const mentorSchema = mongoose.Schema(
   {
      badges: {
         type: {
            badgeType: {
               type: String,
               enum: ['gold', 'silver', 'bronze'],
            },
            badgeCount: {
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
import mongoose, { Schema } from "mongoose";

const feedbackSchema = mongoose.Schema(
   {
      mentor: {
         type: Schema.Types.ObjectId,
         ref: 'Mentor'
      },
      student: {
         type: Schema.Types.ObjectId,
         ref: 'Student'
      },
      feedback: {
         type: String,
         default: ""
      },
      date: {
         type: Date,
         default: Date.now
      }
   },
   {
      timestamps: true,
   },
);

const Feedback = mongoose.model('feedback', feedbackSchema);
export default Feedback;
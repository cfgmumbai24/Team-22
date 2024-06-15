import Feedback from "../models/feedback.model";

const addFeedback = async (req, res) => {
   try {
      // Get the feedback data from the request body
      const feedbackBody = req.body;
      // Save the feedback data to the database
      const newFeedback = new Feedback(feedbackBody);
      await newFeedback.save();
      return res.status(201).json({ message: "Feedback added successfully" });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}
export default addFeedback;
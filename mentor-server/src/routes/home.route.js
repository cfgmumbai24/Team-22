import express from "express";
import getMentorDetails from "../controllers/getMentorDetails.js";
import addFeedback from "../controllers/addFeedback.js";

const router = express.Router();

router.post('/dashboard/feedback', addFeedback);


export default router;
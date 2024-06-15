import express from "express";
import addFeedback from "../controllers/addFeedback.js";

const router = express.Router();

router.post('/dashboard/feedback', addFeedback);

export default router;
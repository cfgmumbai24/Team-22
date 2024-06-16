import express from "express";
import addFeedback from "../controllers/addFeedback.js";
import getStudents from "../controllers/getStudents.js";

const router = express.Router();

router.post('/feedback', addFeedback);
router.get('/add-class/:id', getStudents);


export default router;
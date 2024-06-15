import express from "express";
import getDetails from '../controllers/getDetails.js';
import getMentorDetails from "../controllers/getMentorDetails.js";

const router = express.Router();

router.get('/', getDetails);
router.get('/mentors/', getMentorDetails)


export default router;
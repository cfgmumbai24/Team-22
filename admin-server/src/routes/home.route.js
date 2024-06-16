import express from "express";
import getDetails from '../controllers/getDetails.js';
import getMentorDetails from "../controllers/getMentorDetails.js";
import getMentorDetailsArray from "../controllers/getMentorDetailsArray.js";

const router = express.Router();

router.get('/home', getDetails);
router.get('/mentors', getMentorDetails);
router.get('/mentors/data', getMentorDetailsArray);


export default router;
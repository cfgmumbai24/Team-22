import express from "express";
import getDetails from '../controllers/getDetails.js';
import getMentorDetails from "../controllers/getMentorDetails.js";
import getMentorDetailsArray from "../controllers/getMentorDetailsArray.js";
import getFeedback from "../controllers/getFeedback.js";
import getDeepdive from "../controllers/getDeepdive.js";

const router = express.Router();

router.get('/home', getDetails);
router.get('/mentors', getMentorDetails);
router.get('/mentors/data', getMentorDetailsArray);
router.get('/feedback', getFeedback);
router.get('/deepdive', getDeepdive);


export default router;
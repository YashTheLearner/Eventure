
import requireAuth from '../middleware/requireAuth.js';
import express from 'express';
import {loginUser , registerUser,getUser ,updateUser} from "../controllers/app.controllers.js"
import { getAttendedEvents , getHostedEvents  } from '../controllers/getUserEvents.js';
import { getUserAvatar } from '../controllers/getUserAvatar.controller.js';
const route = express.Router();



route.post("/login" , loginUser);
route.post("/register" , registerUser);
route.post("/updateuser", requireAuth ,updateUser);
route.get("/getuser", requireAuth, getUser)
route.get('/:userId/attendedevents', requireAuth, getAttendedEvents);
route.get('/:userId/hostedevents', getHostedEvents);
route.get('/avatar', requireAuth, getUserAvatar);
export default route
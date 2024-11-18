
import requireAuth from '../middleware/requireAuth.js';
import express from 'express';
import {loginUser , registerUser,getUser, updateUser } from "../controllers/app.controllers.js"
import { getAttendedEvents , getHostedEvents  } from '../controllers/getUserEvents.js';
import { getUserAvatar } from '../controllers/getUserAvatar.controller.js';
const route = express.Router();



route.post("/login" , loginUser);
route.post("/register" , registerUser);
route.get("/getuser", requireAuth, getUser)
route.put('/updateuser', requireAuth, updateUser);
route.get('/attendedevents', requireAuth, getAttendedEvents);
route.get('/hostedevents',requireAuth, getHostedEvents);
route.get('/avatar', requireAuth, getUserAvatar);
export default route
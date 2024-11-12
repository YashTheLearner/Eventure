import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      minLength: 11,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    userBio: {
      type: String,
      required: false,
    },
    userLinkedIn: {
      type: String,
      required: false,
    },
    userInsta: {
      type: String,
      required: false,
    },
    noOfAttended: {
      type: Number,
      default: 0,
    },
    noOfHosted: {
      type: Number,
      default: 0,
    },
    username: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: false,
    },
    eventPreferences: {
      type: [String], // Array of strings
      enum: ["Educational", "Music", "Cultural", "Spiritual", "Corporate"],
      required: false,
    },
    hostedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event", // Reference to the Event model
      },
    ],
    attendedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event", // Reference to the Event model
      },
    ],
    avatar :{
      type: String,
      default: 'default.jpg'  
    }
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);
export default User;

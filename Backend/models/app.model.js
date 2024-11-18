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
      default: 0,
      type: Number,
      required: false,
    },
    userBio: {
      default: "Hey there! I am using Eventify.",
      type: String,
      required: false,
    },
    userLinkedIn: {
      default: "",
      type: String,
      required: false,
    },
    userInsta: {
      default: "",
      type: String,
      required: false,
    },
    userDiscord:{
      default: "",
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

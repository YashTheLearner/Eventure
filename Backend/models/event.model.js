import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  detailedDescription: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  Mode: {
    type: String,
    required: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }],
  registrations:{
    type: Number,
    required: false,
    default: 0,
  },
  attendees:{
    type: Number,
    required: false,
    default: 0,
  },
  rsvp:{
    type: Number,
    required: false,
    default: 0,
  },
  capacity: {
    type: Number,
    required: true,
    default: 0,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer.',
    },
  },
  pincode: {
    type: String,
    required: true,
  },
}, { versionKey: false }); // Ensure the options object is outside 


const Event = mongoose.model('Event', eventSchema);
export default Event;  

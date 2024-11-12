import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ShortDescription: {
    type: String,
    required: true,
  },
  LongDescription: {
    type: String,
    required: true,
  },
  img:{
    type: String,
    required: false,
    
     
  },
  

  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  Mode: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true,
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model (optional, if you want to track attendees)
  }],
  capacity:{
    type: Number,
    required: true,
    default: 0,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer.'
    }
  }
}, { versionKey: false });

const Event = mongoose.model('Event', eventSchema);
export default Event;

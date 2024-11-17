import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate if needed
import { toast, ToastContainer } from "react-toastify"; // Optional for success/error feedback
import axios from "../Axios/axios.jsx"; // Replace with your Axios instance if needed

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    shortDescription: "",
    detailedDescription: "",
    eventImage: null,
    dateTime: "",
    location: "",
    pincode: "",
    capacity: "",
  });
  const navigate = useNavigate(); // Initialize navigate if you want to redirect after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, eventImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const token = localStorage.getItem("token");
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      console.log(formDataToSend);
      // Replace "/event/create" with your actual API endpoint
      const result = await axios.post("/event/create", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
      });
      if(result.status === 201) {
      navigate("/"); // Navigate to the events page or another appropriate route
      }
    } catch (error) {
      console.log(error|| "Failed to create event");
    }
  };

  // Here you handle the onClick function for submitting form data
  const handleClick = (e) => {
    handleSubmit(e); // Call the existing handleSubmit function when the button is clicked
  };

  return (
    <section className="bg-[rgba(17,24,39,1)] min-h-screen flex items-center justify-center py-8">
      <ToastContainer />
      <div className="bg-[#1f2937] rounded-2xl shadow-2xl max-w-4xl p-8 w-full">
        <h2 className="text-3xl font-bold text-[#ffcc00] mb-4">Create Event</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="eventTitle">
              Event Title
            </label>
            <input
              type="text"
              name="eventTitle"
              id="eventTitle"
              placeholder="Enter event title"
              className="w-full p-3 rounded-lg bg-[#2c3e50] border border-gray-600 text-white focus:outline-none focus:border-[#ffcc00] placeholder-gray-400"
              value={formData.eventTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="shortDescription">
              Short Description
            </label>
            <input
              type="text"
              name="shortDescription"
              id="shortDescription"
              placeholder="Enter a short description"
              className="w-full p-3 rounded-lg bg-[#2c3e50] border border-gray-600 text-white focus:outline-none focus:border-[#ffcc00] placeholder-gray-400"
              value={formData.shortDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="detailedDescription">
              Detailed Description
            </label>
            <textarea
              name="detailedDescription"
              id="detailedDescription"
              placeholder="Enter detailed description"
              className="w-full p-3 rounded-lg bg-[#2c3e50] border border-gray-600 text-white focus:outline-none focus:border-[#ffcc00] placeholder-gray-400"
              value={formData.detailedDescription}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="eventImage">
              Event Image
            </label>
            <input
              type="file"
              name="eventImage"
              id="eventImage"
              accept="image/*"
              className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ffcc00] file:text-[#1f2937] hover:file:bg-[#ffd700]"
              onChange={handleFileChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="dateTime">
              Date & Time
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              id="dateTime"
              className="w-full p-3 rounded-lg bg-[#2c3e50] border border-gray-600 text-white focus:outline-none focus:border-[#ffcc00]"
              value={formData.dateTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter event location"
              className="w-full p-3 rounded-lg bg-[#2c3e50] border border-gray-600 text-white focus:outline-none focus:border-[#ffcc00] placeholder-gray-400"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="pincode">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder="Enter event pincode"
              className="w-full p-3 rounded-lg bg-[#2c3e50] border border-gray-600 text-white focus:outline-none focus:border-[#ffcc00] placeholder-gray-400"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="capacity">
              Capacity
            </label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              placeholder="Enter event capacity"
              className="w-full p-3 rounded-lg bg-[#2c3e50] border border-gray-600 text-white focus:outline-none focus:border-[#ffcc00] placeholder-gray-400"
              value={formData.capacity}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="button" // Use type="button" here, as handleSubmit is called via onClick
            onClick={handleClick} // Call the handleSubmit function when clicked
            className="w-full bg-[#ffcc00] text-[#1f2937] font-bold py-3 rounded-lg hover:bg-[#ffd700] transition duration-300"
          >
            Create Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateEventForm;

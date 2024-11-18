import React, { useEffect, useState } from "react";
import eventImage from '../assets/photo.jpg'; // Ensure the path is correct
import mapImage from '../assets/map-image.jpg'; // Ensure the path is correct
import axios from '../Axios/axios'; // Import axios instance
import { useParams } from "react-router-dom";

const Event = () => {
  const [eventDetails, setEventDetails] = useState({});
  const [isRegistered, setIsRegistered] = useState(false); // Track registration status
  const [hasRSVPd, setHasRSVPd] = useState(false); // Track RSVP status
  const { id } = useParams(); // Extracts 'id' from the URL

  useEffect(() => {
    async function fetchEventDetails() {
      try {
        const response = await axios.get(`/event/${id}`); // Fetch event details by ID
        setEventDetails(response.data);
        // Check if the user is registered and has RSVP'd (you'll need to adjust this part based on your backend logic)
        setIsRegistered(response.data.isRegistered);
        setHasRSVPd(response.data.hasUserRSVPd);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    }
    fetchEventDetails();
  }, [id]);

  // Handle Register action
  const handleRegister = async () => {
    const id = useParams(); // Extracts 'id' from the URL
    try {
      await axios.post(`/event/${id}/register`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setIsRegistered(true); // User is now registered
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  // Handle RSVP action
  const handleRSVP = async () => {
    try {
      await axios.post(`/event/${id}/rsvp`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setHasRSVPd(true); // User has RSVP'd
    } catch (error) {
      console.error("Error during RSVP:", error);
    }
  };

  // Handle Cancel RSVP action
  const handleCancelRSVP = async () => {
    try {
      await axios.post(`/event/${id}/cancel-rsvp`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setHasRSVPd(false); // User has canceled RSVP
    } catch (error) {
      console.error("Error canceling RSVP:", error);
    }
  };

  return (
    <div className="bg-[#2c3e50] min-h-screen flex justify-center items-center px-4 py-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Event Image */}
        <div
          className="h-60 md:h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${eventImage})` }}
        >
          <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center text-white text-3xl font-bold">
            {eventDetails.eventTitle}
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Short Description */}
          <p className="text-gray-700 text-lg">
            {eventDetails.shortDescription}
          </p>

          {/* Detailed Description */}
          <p className="text-gray-600">
            {eventDetails.detailedDescription}
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {/* Date and Time Card */}
            <div className="flex-1 bg-[#e6e6e6] p-4 rounded-lg flex flex-col items-center justify-center">
              <p className="text-gray-800 font-semibold text-xl">Date & Time</p>
              <p className="text-gray-600 mt-2">
                {new Date(eventDetails.dateTime).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                {new Date(eventDetails.dateTime).toLocaleTimeString()}
              </p>
              {/* Register or RSVP Button */}
              {!isRegistered ? (
                <button
                  onClick={handleRegister}
                  className="mt-4 bg-[#ffcc00] text-black py-2 px-4 rounded-lg shadow-md hover:bg-[#e6ad13] transition duration-300"
                >
                  Register
                </button>
              ) : !hasRSVPd ? (
                <button
                  onClick={handleRSVP}
                  className="mt-4 bg-[#ffcc00] text-black py-2 px-4 rounded-lg shadow-md hover:bg-[#e6ad13] transition duration-300"
                >
                  RSVP
                </button>
              ) : (
                <button
                  onClick={handleCancelRSVP}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                >
                  Cancel RSVP
                </button>
              )}
            </div>

            {/* Location Card */}
            <div className="flex-1 bg-white p-4 rounded-lg flex flex-col items-center justify-center shadow-md">
              <p className="text-gray-800 font-semibold text-xl">Location</p>
              <img src={mapImage} alt="Map" className="w-full h-32 object-cover mt-2 rounded-lg" />
              <p className="text-gray-600 mt-2 text-center">
                {eventDetails.location}, {eventDetails.pincode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

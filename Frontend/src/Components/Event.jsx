import React from "react";
import eventImage from '../assets/photo.jpg'; // Ensure the path is correct
import mapImage from '../assets/photo.jpg'; // Ensure the path is correct

const Event = () => {
  return (
    <div className="bg-[#2c3e50] min-h-screen flex justify-center items-center px-4 py-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Event Image */}
        <div
          className="h-60 md:h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${eventImage})` }}
        >
          <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center text-white text-3xl font-bold">
            Event Title
          </div>
        </div>

        <div className="p-6 space-y-4">
          
          {/* Short Description */}
          <p className="text-gray-700 text-lg">
            This is a short description of the event to give attendees a quick overview of what to expect.
          </p>

          {/* Detailed Description */}
          <p className="text-gray-600">
            Here, you can provide a more detailed description of the event, including information about the speakers, agenda, and the unique experiences attendees will gain by joining. Make this section informative yet engaging to keep the readers interested.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {/* Date and Time Card */}
            <div className="flex-1 bg-[#e6e6e6] p-4 rounded-lg flex flex-col items-center justify-center">
              <p className="text-gray-800 font-semibold text-xl">Date & Time</p>
              <p className="text-gray-600 mt-2">March 25, 2024</p>
              <p className="text-gray-600">10:00 AM - 5:00 PM</p>
              <button className="mt-4 bg-[#ffcc00] text-black py-2 px-4 rounded-lg shadow-md hover:bg-[#e6ad13] transition duration-300">
                Register Now
              </button>
            </div>

            {/* Location Card */}
            <div className="flex-1 bg-white p-4 rounded-lg flex flex-col items-center justify-center shadow-md">
              <p className="text-gray-800 font-semibold text-xl">Location</p>
              <img src={mapImage} alt="Map" className="w-full h-32 object-cover mt-2 rounded-lg" />
              <p className="text-gray-600 mt-2 text-center">
                123 Event Street, City, Country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

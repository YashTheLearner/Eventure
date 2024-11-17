import React from 'react';
import carrer from "../assets/career-development.jpg"

export const EventsCard = ({ eventTitle, shortDescription, dateTime, location, img }) => {
  return (
    <div className="event-card p-4 bg-[#22333b] shadow-md rounded-md">
     <img src={carrer} alt="Event Image 1" className="event-image w-full h-[150px] object-cover" />
      <h3 className="mt-2 font-bold text-lg">{eventTitle}</h3>
      <p className="text-white">{shortDescription}</p>
      <p className="text-white text-sm">{new Date(dateTime).toLocaleString()}</p>
      <p className="text-white text-sm">{location}</p>
    </div>
  );
};



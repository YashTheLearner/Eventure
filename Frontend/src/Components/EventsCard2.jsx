import React from 'react'
import carrer from '../assets/career-development.jpg'

export const EventsCard2 = () => {
  return (
    <>
    <div className="event-card bg-[#22333b] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
    <div className="event-image-container relative bg-[#22333b] p-12 grid gap-4 overflow-hidden transition-colors">
      <img src={carrer} alt="Event Image 1" className="event-image w-full h-[150px] object-cover" />
      <div className="event-status absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Free</div>
    </div>
    <div className="event-info p-4 text-[#f5f5f5]">
      <h3 className="event-title text-lg mb-2">Session of Cybersecurity | Learn about the emerging career path</h3>
      <p className="event-date-time text-sm mb-1">12 Dec 2024 | 6:00 PM</p>
      <p className="event-mode text-sm">Online</p>
    </div>
  </div>
    </>
  )
}

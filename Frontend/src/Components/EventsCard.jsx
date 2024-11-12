import React from 'react';

export const EventsCard = () => {
  return (
    <div class="event-card bg-[#22333b] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
    <div class="event-image-container relative bg-[#22333b] p-12 grid gap-4 overflow-hidden transition-colors">
      <img src="../assets/career-development.jpg" alt="Event Image 1" class="event-image w-full h-[150px] object-cover" />
      <div class="event-status absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Free</div>
    </div>
    <div class="event-info p-4 text-[#f5f5f5]">
      <h3 class="event-title text-lg mb-2">Session of Cybersecurity | Learn about the emerging career path</h3>
      <p class="event-date-time text-sm mb-1">12 Dec 2024 | 6:00 PM</p>
      <p class="event-mode text-sm">Online</p>
    </div>
  </div>
  );
};

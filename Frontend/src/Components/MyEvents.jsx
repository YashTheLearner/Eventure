import React, { useState } from 'react';
import { EventsCard } from './EventsCard'; // Assume this component displays event details

const MyEvents = () => {
  // Sample event data
  const eventsData = [
    { id: 1, name: 'Tech Conference 2024', date: '2024-12-15', category: 'Technology' },
    { id: 2, name: 'Art Expo', date: '2024-11-20', category: 'Art' },
    { id: 3, name: 'Music Fest', date: '2024-12-10', category: 'Music' },
    { id: 4, name: 'Startup Pitch Night', date: '2024-11-25', category: 'Business' },
    // Add more events as needed
  ];

  const [filter, setFilter] = useState('');
  const [events, setEvents] = useState(eventsData);

  // Filter handler
  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setFilter(selectedCategory);
    setEvents(
      selectedCategory
        ? eventsData.filter((event) => event.category === selectedCategory)
        : eventsData
    );
  };

  return (
    <div className="flex flex-col px-[150px] h-[100vh] bg-[rgba(17,24,39,1)] p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">My Events</h1>
      
      {/* Filter dropdown */}
      {/* <div className="mb-4">
        <label htmlFor="category-filter" className="block mb-2">Filter by Category:</label>
        <select
          id="category-filter"
          value={filter}
          onChange={handleFilterChange}
          className="p-2 bg-gray-800 rounded w-full"
        >
          <option value="">All</option>
          <option value="Technology">Technology</option>
          <option value="Art">Art</option>
          <option value="Music">Music</option>
          <option value="Business">Business</option>
          {/* Add more categories as needed */}
        {/* </select>
      </div> */}

      {/* Events display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[70vh] overflow-y-auto">
        {events.length > 0 ? (
          events.map((event) => (
            <EventsCard key={event.id} event={event} />
          ))
        ) : (
          <p className="text-center">No events found for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default MyEvents;

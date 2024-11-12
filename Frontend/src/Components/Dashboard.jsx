import React from "react";

const Dashboard = () => {
  // Sample event data for the dashboard
  const events = [
    {
      title: "Session of Cybersecurity | Learn about the emerging career path",
      date: "12 Dec 2024 | 6:00 PM",
      registrations: 120,
      attendees: 95,
      rsvp: 110,
    },
    {
      title: "Volunteer for Navgo Foundation - Join us in our Beach Cleaning Drive",
      date: "15 Dec 2024 | 2:00 PM",
      registrations: 80,
      attendees: 65,
      rsvp: 75,
    },
    {
      title: "Author Meetup - Meet fellow Amateur Authors",
      date: "18 Dec 2024 | 5:30 PM",
      registrations: 50,
      attendees: 40,
      rsvp: 45,
    },
    {
      title: "Swifties Hour: A Swiftie Meetup at DB Mall",
      date: "20 Dec 2024 | 4:00 PM",
      registrations: 200,
      attendees: 180,
      rsvp: 195,
    },
    {
      title: "Open Mic | Standup, Poetry, Singing and More! Sign Up Now",
      date: "25 Dec 2024 | 7:00 PM",
      registrations: 90,
      attendees: 70,
      rsvp: 85,
    },
    {
      title: "Yoga and Meditation BootCamp at Vaibhav Sundri Park | Free Bootcamp",
      date: "28 Dec 2024 | 3:00 PM",
      registrations: 150,
      attendees: 140,
      rsvp: 145,
    },
  ];

  return (
    <div className="min-h-screen bg-[#2c3e50] p-6">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600">Event Title</th>
                <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-4 py-3 bg-gray-100 text-center text-sm font-semibold text-gray-600">
                  <i className="bi bi-clipboard-check-fill text-yellow-600 mr-1"></i> Registrations
                </th>
                <th className="px-4 py-3 bg-gray-100 text-center text-sm font-semibold text-gray-600">
                  <i className="bi bi-person-check-fill text-green-600 mr-1"></i> Attendees
                </th>
                <th className="px-4 py-3 bg-gray-100 text-center text-sm font-semibold text-gray-600">
                  <i className="bi bi-calendar-event-fill text-blue-600 mr-1"></i> RSVP
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-b last:border-none">
                  <td className="px-4 py-3 text-gray-700 text-sm">{event.title}</td>
                  <td className="px-4 py-3 text-gray-700 text-sm">{event.date}</td>
                  <td className="px-4 py-3 text-center text-gray-700 text-sm">{event.registrations}</td>
                  <td className="px-4 py-3 text-center text-gray-700 text-sm">{event.attendees}</td>
                  <td className="px-4 py-3 text-center text-gray-700 text-sm">{event.rsvp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
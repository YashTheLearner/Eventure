import React, { useEffect, useState } from "react";
import { useOutletContext } from 'react-router-dom';
import axios from '../Axios/axios';

const Dashboard = ({ isActive }) => {
  const [hostedEvents, setHostedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(`/user/hostedevents`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHostedEvents(response.data.hostedEvents);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized access. Please log in again.");
        } else {
          console.error("Unexpected error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const { toggleSideBar } = useOutletContext();
  useEffect(() => {
    toggleSideBar();
  }, [isActive]);

  return (
    <div className="min-h-screen bg-[#2c3e50] p-6">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>

        {loading ? (
          <p>Loading events...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600">Event Title</th>
                  <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600">Date</th>
                  <th className="px-4 py-3 bg-gray-100 text-center text-sm font-semibold text-gray-600">Registrations</th>
                  <th className="px-4 py-3 bg-gray-100 text-center text-sm font-semibold text-gray-600">Attendees</th>
                  <th className="px-4 py-3 bg-gray-100 text-center text-sm font-semibold text-gray-600">RSVP</th>
                </tr>
              </thead>
              <tbody>
                {hostedEvents.length > 0 ? (
                  hostedEvents.map((event, index) => (
                    <tr key={index} className="border-b last:border-none">
                      <td className="px-4 py-3 text-gray-700 text-sm">{event.eventTitle}</td>
                      <td className="px-4 py-3 text-gray-700 text-sm">
                        {new Date(event.dateTime).toLocaleDateString()} {/* Format date */}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm">{event.registrations}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm">{event.attendees}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm">{event.rsvp}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-600">No hosted events found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

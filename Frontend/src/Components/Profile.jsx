import React, { useEffect, useState } from 'react';
import { EventsCard } from './EventsCard';
import { useOutletContext, useNavigate } from 'react-router-dom';

const Profile = ({isActive}) => {
  // Initial user data
  const { toggleSideBar } = useOutletContext();
  useEffect(() => {
    toggleSideBar(); // This will only run once when the component is mounted
  }, [isActive]);

  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState("http://localhost:3000/public/default.jpg");
  const [bio, setBio] = useState("Bio");
  const [hostedCount, setHostedCount] = useState(0);
  const [attendedCount, setAttendedCount] = useState(0);
  const [instagram, setInstagram] = useState("https://instagram.com/");
  const [discord, setDiscord] = useState("https://discord.com/");
  const [linkedIn, setLinkedIn] = useState("https://linkedin.com/");


  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(`/getuser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          const user = response.data.user;
          setIsAuthenticated(true);
          setName(response.data.username);
          // Set avatar dynamically based on response
          setAvatar(response.data.avatar ? `http://localhost:3000/public/${response.data.avatar}` : "http://localhost:3000/public/default.jpg");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          toast.error("Session expired. Please log in again.");
          // navigate("/");
        } else {
          console.error("Unexpected error:", error);
          toast.error("An error occurred. Please try again later.");
        }
      } finally {
        setLoading(false); // Ensure loading state is false after the request
      }
    };

    fetchAvatar();
  }, [ navigate]);



  // State to manage user data
  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLinkChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      socialLinks: {
        ...prevData.socialLinks,
        [name]: value,
      },
    }));
  };

  return (
    <div className="flex h-[100vh] bg-[rgba(17,24,39,1)] p-3">
      {/* Left side - User Information */}
      <div className="w-[28%] bg-[rgba(17,24,39,1)] border-[rgb(149 149 149)] border-[1px] text-white rounded-lg p-6">
        <img
          src={avatar}
          alt="User Avatar"
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />

       
          <div>
            <input
              type="text"
              name="username"
              disabled={!isEditing}
              value={userData.username}
              onChange={handleChange}
              className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
/>

                       <textarea
              name="bio"
              value={userData.bio}
              disabled={!isEditing}
              onChange={handleChange}
              className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
/>

                     </div>
        

        <div className="px-2 mt-1">
          <p className="font-semibold">Hosted Events: {userData.hostedCount}</p>
          <p className="font-semibold mt-4">Attended Events: {userData.attendedCount}</p>
        </div>

        <div className="mt-6 space-y-2">
         
            <div>
              <input
                type="text"
                name="instagram"
                disabled={!isEditing}
                value={userData.socialLinks.instagram}
                onChange={handleLinkChange}
                placeholder="Instagram URL"
                className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
/>

        
              <input
                type="text"
                name="discord"
                disabled={!isEditing}
                value={userData.socialLinks.discord}
                onChange={handleLinkChange}
                placeholder="Discord URL"
                className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
/>

        
              <input
                type="text"
                name="linkedIn"
                disabled={!isEditing}
                value={userData.socialLinks.linkedIn}
                onChange={handleLinkChange}
                placeholder="LinkedIn URL"
                className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
/>

        
            </div>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className=" w-full bg-blue-600 p-2 rounded hover:bg-blue-700"
        >
          {isEditing ? 'Save' : 'Edit Profile'}
        </button>
      </div>

      {/* Right side - Hosted Events */}
      <div className="w-2/3 border-[rgb(149 149 149)]   border-[1px] rounded-lg p-6 ml-6">
        <h2 className="text-2xl text-white font-bold mb-4">Hosted / Attended</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh] overflow-y-auto gap-4">
          {/* Sample hosted events */}
          <EventsCard/>

          <EventsCard/>

          <EventsCard/>

          <EventsCard/>

          
          {/* Add more event cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

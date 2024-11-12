import React, { useState } from 'react';
import { EventsCard } from './EventsCard';

const Profile = () => {
  // Initial user data
  const initialUserData = {
    avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    username: 'John Doe',
    bio: 'Software developer passionate about coding and events.',
    hostedCount: 5,
    attendedCount: 10,
    socialLinks: {
      instagram: 'https://instagram.com/username',
      discord: 'https://discord.com/invite/example',
      linkedIn: 'https://linkedin.com/in/username',
    },
  };

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
          src={userData.avatar}
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
          className="mt-4 w-full bg-blue-600 p-2 rounded hover:bg-blue-700"
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

import React, { useEffect, useState } from 'react';
import { EventsCard } from './EventsCard';
import { useOutletContext, useNavigate } from 'react-router-dom';
import axios from '../Axios/axios';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
// import { set } from 'mongoose';

const Profile = ({ isActive }) => {
  const { toggleSideBar } = useOutletContext();
  const navigate = useNavigate();
  const [isShowingHosted, setIsShowingHosted] = useState(true);

  // Individual state hooks for each user data field
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("http://localhost:3000/public/default.jpg");
  const [bio, setBio] = useState("");
  const [hostedCount, setHostedCount] = useState(0);
  const [attendedCount, setAttendedCount] = useState(0);
  const [instagram, setInstagram] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [hostedEvents, setHostedEvents] = useState([]);
  const [attendedEvents, setAttendedEvents] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(`/user/getuser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.user);
        if (response.data.user) {
          setName(response.data.user.username);
          setBio(response.data.user.userBio ||"");
          setHostedCount(response.data.user.noOfHosted || 0);
          setAttendedCount(response.data.user.noOfAttended || 0);
          setInstagram(response.data.user.userInsta || "");
          setDiscord(response.data.user.userDiscord ||"");
          setLinkedIn(response.data.user.userLinkedIn || "");
          setAvatar(response.data.user.avatar ? `http://localhost:3000/public/${response.data.user.avatar}` : "http://localhost:3000/public/default.jpg");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          toast.error("Session expired. Please log in again.");
          navigate("/"); // Redirect to login or home
        } else {
          console.error("Unexpected error:", error);
          toast.error("An error occurred. Please try again later.");
        }
      }
    };

    fetchUser();
  }, [navigate]);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Session expired. Please log in again.");
        navigate("/"); // Redirect to login or home
        return;
      }
  
      const updatedUser = {
        username: name,
        bio: bio,
        instagram: instagram,
        discord: discord,
        linkedIn: linkedIn,
        // avatar: avatar, // Assuming you're not changing avatar here
      };
      console.log(updatedUser);
      const response = await axios.put('/user/updateuser', updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.data.success) {
        toast.success("Profile updated successfully!");
        setIsEditing(false); // Disable editing after save
      } else {
        toast.error("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error saving profile", error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  

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
      // console.log(hostedEvents)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // localStorage.removeItem("token");
        // toast.error("Session expired. Please log in again.");
        // navigate("/"); // Redirect to login or home
      } else {
        console.error("Unexpected error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  }
  fetchEvents();
  },[])

  // console.log(avatar)

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
            value={name || ''}
            onChange={(e)=>{
              setName(e.target.value)
            }}
            className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
          />

          <textarea
            name="bio"
            value={bio || ""}
            disabled={!isEditing}
            placeholder='Bio :-'
            onChange={(e)=>{
              setBio(e.target.value)
            }}
            className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
          />
        </div>

        <div className="px-2 mt-1">
          <p className="font-semibold">Hosted Events: {hostedCount}</p>
          <p className="font-semibold mt-4">Attended Events: {attendedCount}</p>
        </div>

        <div className="mt-6 space-y-2">
          <div>
            <input
              type="text"
              name="instagram"
              disabled={!isEditing}
              value={instagram}
              onChange={(e)=>{
                setInstagram(e.target.value)
              }}
              placeholder="Instagram URL"
              className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
            />

            <input
              type="text"
              name="discord"
              disabled={!isEditing}
              value={discord}
              onChange={(e)=>{
                setDiscord(e.target.value)
              }}
              placeholder="Discord URL"
              className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
            />

            <input
              type="text"
              name="linkedIn"
              disabled={!isEditing}
              value={linkedIn}
              onChange={(e)=>{
                setLinkedIn(e.target.value)
              }}
              placeholder="LinkedIn URL"
              className={`w-full p-2 ${isEditing ? 'bg-gray-800' : 'bg-[rgba(17,24,39,1)]'} text-bold text-white rounded mb-2`}
            />
          </div>
        </div>

        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)} // On save, update profile, else start editing
          className="w-full bg-blue-600 p-2 rounded hover:bg-blue-700"
        >
          {isEditing ? 'Save' : 'Edit Profile'}
        </button>
      </div>

      {/* Right side - Hosted Events */}
      <div className="w-2/3 border-[rgb(149 149 149)] border-[1px] rounded-lg p-6 ml-6">
        <h2 className="text-2xl text-white flex font-bold mb-4"><div className={`${isShowingHosted?"text-[#ffcc00]":""}`} onClick={()=>{
          setIsShowingHosted(true);
        }} >Hosted&nbsp;</div ><div className={`${isShowingHosted?"":"text-[#ffcc00]"}`} onClick={()=>{
          setIsShowingHosted(false);
        }}> / Attended</div></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh] overflow-y-auto gap-4">
          {/* Sample hosted events */}
          {isShowingHosted ? hostedEvents.map((event) => (
            <EventsCard
              key={event._id}
              eventTitle={event.eventTitle}
              shortDescription={event.shortDescription}
              dateTime={event.dateTime}
              location={event.location}
              img={event.img}
              id = {event._id}
            />
          )) : 
          <></>
          // attendedEvents.map((event) => (
            // <EventsCard
            //   key={event._id}
            //   eventTitle={event.eventTitle}
            //   shortDescription={event.shortDescription}
            //   dateTime={event.dateTime}
            //   location={event.location}
            //   img={event.img}
            // />
          // )
          }
          {/* Add more event cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

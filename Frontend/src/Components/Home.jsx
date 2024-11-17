import React, { useEffect, useState } from 'react';
import UncontrolledExample from './UncontrolledExample.jsx';
import carrer from '../assets/career-development.jpg';
import axios from '../Axios/axios.jsx';
import { useNavigate } from 'react-router-dom';
import { EventsCard2 } from './EventsCard2.jsx';
import { EventsCard} from './EventsCard.jsx';




const Home = () => {

  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState([]); 

  const navigate = useNavigate();
  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/user/avatar`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          setIsAuthenticated(true);
          setName(response.data.user.name);
          setAvatar(response.data.user.avatar);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
        } else {
          console.error('Unexpected error:', error);
        }
      }
    };

    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get('/event/all',{
          
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ); // API to fetch events

        console.log(response.data.events)
        console.log(response.data.success + "nello")
        if (response.data.success) {
          setEvents(response.data.events); // Set events in state
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchAvatar();
    fetchEvents(); // Fetch events on component mount
  }, []); // Add navigate to the dependency array

console.log(isAuthenticated);

  return (
    <>
      
<UncontrolledExample />


      <div className='bg-[#1b263b] mt-[80px] px-[150px]'>

      <div className="upcoming-events flex flex-row">
        <div className="upcoming-events-text text-white pt-0 tracking-[1px] font-semibold text-[2rem]">
          Upcoming Events
        </div>
      </div>


      <div className="bg-[#ffcc00] p-[1px] "></div>

      <div className="upcoming-events mt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventsCard
              key={event._id}
              eventTitle={event.eventTitle}
              shortDescription={event.shortDescription}
              dateTime={event.dateTime}
              location={event.location}
              img={event.img}
            />
          ))}
        </div>



      <div className="upcoming-events mt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* <!-- Event Card 1 --> */}
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />
  <EventsCard2 />

</div>
    
   {/* BANNER */}

   <div className="container">
      <img className="banner" src="static/img/BAN3.png"  alt=""/>
    </div>

    {/* BANNER END  */}

    <div className=" mx-auto mt-2 text-white">
      <footer className="py-5">
        <div>
          <div className="w-full md:w-1/2 ml-0 md:ml-1/12 mb-3">
            <form>
              <h5 className="text-xl font-semibold">Subscribe to our newsletter</h5>
              <p className="text-lg">Monthly digest of what's new and exciting from us.</p>
              <div className="flex" role="search">
                <input className="w-[280px] px-3 py-2 rounded-md" type="email" placeholder="Email" aria-label="Email" />
                <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-2" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        
        {/* FOOTER  */}
        <div className="flex flex-col sm:flex-row justify-between py-4 my-4 border-t">
          <p>© 2024 Eventure, Made with love in Bhopal, India.</p>
          <ul className="list-none flex">
            <li className="ml-3"><a className="text-gray-500" href="#"><i className="bi bi-twitter text-2xl"></i></a></li>
            <li className="ml-3"><a className="text-gray-500" href="#"><i className="bi bi-instagram text-2xl"></i></a></li>
            <li className="ml-3"><a className="text-gray-500" href="#"><i className="bi bi-facebook text-2xl"></i></a></li>
          </ul>
        </div>
      </footer>
    </div>


   {/* FOOTER END */}
    

      </div>



  

    </>
  );
};

// Make sure this line is present
export default Home;

import React from 'react';
import UncontrolledExample from './UncontrolledExample.jsx';
import carrer from '../assets/career-development.jpg';


const Home = () => {
  return (
    <>
      
<UncontrolledExample />


      <div className='bg-[#1b263b] mt-[80px] px-[150px]'>

      <div class="upcoming-events flex flex-row">
        <div class="upcoming-events-text text-white pt-0 tracking-[1px] font-semibold text-[2rem]">
          Upcoming Events
        </div>
      </div>


      <div class="bg-[#ffcc00] p-[1px] "></div>

      <div class="upcoming-events mt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* <!-- Event Card 1 --> */}
  <div class="event-card bg-[#22333b] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
    <div class="event-image-container relative bg-[#22333b] p-12 grid gap-4 overflow-hidden transition-colors">
      <img src={carrer} alt="Event Image 1" class="event-image w-full w-full h-[150px] object-cover" />
      <div class="event-status absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Free</div>
    </div>
    <div class="event-info p-4 text-[#f5f5f5]">
      <h3 class="event-title text-lg mb-2">Session of Cybersecurity | Learn about the emerging career path</h3>
      <p class="event-date-time text-sm mb-1">12 Dec 2024 | 6:00 PM</p>
      <p class="event-mode text-sm">Online</p>
    </div>
  </div>

  {/* <!-- Event Card 2 --> */}
  <div class="event-card bg-[#22333b] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
    <div class="event-image-container relative bg-[#22333b] p-12 grid gap-4 overflow-hidden transition-colors">
      <img src="static/img/community-service.jpg" alt="Event Image 2" class="event-image w-full h-[150px] object-cover" />
      <div class="event-status absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Paid</div>
    </div>
    <div class="event-info p-4 text-[#f5f5f5]">
      <h3 class="event-title text-lg mb-2">Volunteer for Navgo Foundation - Join us in our Beach Cleaning Drive</h3>
      <p class="event-date-time text-sm mb-1">15 Dec 2024 | 2:00 PM</p>
      <p class="event-mode text-sm">In Person</p>
    </div>
  </div>

  {/* <!-- Event Card 3 --> */}
  <div class="event-card bg-[#22333b] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
    <div class="event-image-container relative bg-[#22333b] p-12 grid gap-4 overflow-hidden transition-colors">
      <img src="static/img/education.jpg" alt="Event Image 3" class="event-image w-full h-[150px] object-cover" />
      <div class="event-status absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Free</div>
    </div>
    <div class="event-info p-4 text-[#f5f5f5]">
      <h3 class="event-title text-lg mb-2">Author Meetup - Meet fellow Amaeteur Authors</h3>
      <p class="event-date-time text-sm mb-1">18 Dec 2024 | 5:30 PM</p>
      <p class="event-mode text-sm">Online</p>
    </div>
  </div>

  {/* <!-- Event Card 4 --> */}
  <div class="event-card bg-[#22333b] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
    <div class="event-image-container relative bg-[#22333b] p-12 grid gap-4 overflow-hidden transition-colors">
      <img src="static/img/music-events.jpg" alt="Event Image 4" class="event-image w-full h-[150px] object-cover" />
      <div class="event-status absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Paid</div>
    </div>
    <div class="event-info p-4 text-[#f5f5f5]">
      <h3 class="event-title text-lg mb-2">Swifties Hour: A Swiftie Meetup at DB Mall</h3>
      <p class="event-date-time text-sm mb-1">20 Dec 2024 | 4:00 PM</p>
      <p class="event-mode text-sm">In Person</p>
    </div>
  </div>

  {/* <!-- Event Card 5 --> */}
  <div class="event-card bg-[#22333b] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
    <div class="event-image-container relative bg-[#22333b] p-12 grid gap-4 overflow-hidden transition-colors">
      <img src="static/img/samantha-gades-fIHozNWfcvs-unsplash.jpg" alt="Event Image 5" class="event-image w-full h-[150px] object-cover" />
      <div class="event-status absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Free</div>
    </div>
    <div class="event-info p-4 text-[#f5f5f5]">
      <h3 class="event-title text-lg mb-2">Open Mic | Standup, Poetry, Singing and More! Sign Up Now</h3>
      <p class="event-date-time text-sm mb-1">25 Dec 2024 | 7:00 PM</p>
      <p class="event-mode text-sm">Online</p>
    </div>
  </div>

  {/* <!-- Event Card 6 --> */}
  <div class="event-card bg-[#22333b] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
    <div class="event-image-container relative bg-[#22333b] p-12 grid gap-4 overflow-hidden transition-colors">
      <img src="static/img/spiritual-gatherings.jpg" alt="Event Image 6" class="event-image w-full h-[150px] object-cover" />
      <div class="event-status absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">Paid</div>
    </div>
    <div class="event-info p-4 text-[#f5f5f5]">
      <h3 class="event-title text-lg mb-2">Yoga and Meditation BootCamp at Vaibhav Sundri Park | Free Bootcamp</h3>
      <p class="event-date-time text-sm mb-1">28 Dec 2024 | 3:00 PM</p>
      <p class="event-mode text-sm">In Person</p>
    </div>
  </div>
</div>
    
   {/* BANNER */}

   <div class="container">
      <img class="banner" src="static/img/BAN3.png"  alt=""/>
    </div>

    {/* BANNER END  */}

    <div class=" mx-auto mt-2 text-white">
      <footer class="py-5">
        <div>
          <div class="w-full md:w-1/2 ml-0 md:ml-1/12 mb-3">
            <form>
              <h5 class="text-xl font-semibold">Subscribe to our newsletter</h5>
              <p class="text-lg">Monthly digest of what's new and exciting from us.</p>
              <div class="flex" role="search">
                <input class="w-[280px] px-3 py-2 rounded-md" type="email" placeholder="Email" aria-label="Email" />
                <button class="bg-yellow-500 text-white px-4 py-2 rounded ml-2" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        
        {/* FOOTER  */}
        <div class="flex flex-col sm:flex-row justify-between py-4 my-4 border-t">
          <p>© 2024 Eventure, Made with love in Bhopal, India.</p>
          <ul class="list-none flex">
            <li class="ml-3"><a class="text-gray-500" href="#"><i class="bi bi-twitter text-2xl"></i></a></li>
            <li class="ml-3"><a class="text-gray-500" href="#"><i class="bi bi-instagram text-2xl"></i></a></li>
            <li class="ml-3"><a class="text-gray-500" href="#"><i class="bi bi-facebook text-2xl"></i></a></li>
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

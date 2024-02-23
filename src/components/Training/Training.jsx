import React from 'react';
import SwiperCore, { EffectCoverflow, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';
import './Training.css'; // Import your CSS file

const Training = () => {
  // Initialize Swiper
  SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

  const teamMembers = [
    // Define your team members here with their information
    // You may need to replace the background images and adjust paths
    { name: 'Emma Johnson', role: 'Web Developer', backgroundImage: 'team-img-1.png' },
    // Add other team members...
  ];

  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: -100,
        depth: 500,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index} style={{ backgroundImage: `url(${member.backgroundImage})` }}>
          <div className={`team-box team-box${index + 1}`}>
            <div className="team-name">
              <div className="team-content">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
                {/* Add social media icons and links here */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Training;

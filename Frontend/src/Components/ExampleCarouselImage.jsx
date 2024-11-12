// components/ExampleCarouselImage.js
import React from 'react';

function ExampleCarouselImage({ text }) {
  return (
    <div className="carousel-image h-[50vh]">
      <img
        className="d-block object-cover w-full h-full" // Use object-contain to fit the full image within the container
        src={text}  // Assuming 'text' is the image source
        alt={text}
      />
    </div>
  );
}

export default ExampleCarouselImage;

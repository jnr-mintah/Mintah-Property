import React, { useState } from 'react';
import './carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://i.pinimg.com/236x/eb/c3/4f/ebc34f821cb810969f8ba3d7e20060a4.jpg',
    'https://i.pinimg.com/564x/f9/5e/2c/f95e2ce309e54e3927c0681e6ca29b6d.jpg',
    'https://i.pinimg.com/564x/51/67/47/51674784f7a979cbba35b7791c365a5c.jpg',
    'https://i.pinimg.com/236x/3b/39/46/3b39464babbf2fbe6e395fdb98c8dc53.jpg',
    'https://i.pinimg.com/236x/50/04/01/5004014025f3c22794290ed54062124f.jpg',
    'https://i.pinimg.com/564x/b7/f6/ef/b7f6efb3db17cb69528faec25736e7db.jpg',
    'https://i.pinimg.com/236x/a8/c5/8c/a8c58c86f478f9fb896e033bb91ac06b.jpg',
    'https://i.pinimg.com/564x/33/41/a4/3341a42c361dbf54aa2ec57c36ca1569.jpg',
    'https://i.pinimg.com/564x/e0/54/4b/e0544ba9dcfef58d007fe1c00142f487.jpg',
  ];

  const visibleImages = 5; // Number of images to show initially
  const totalImages = images.length;

  const showSlide = (index) => {
    if (index >= totalImages) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalImages - visibleImages);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  return (
    <div className="carousel">
        <h1>Trusted Partners And Affiliations </h1>
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
        ))}
      </div>
      <button className="button-holder">
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
      </button>
    </div>
  );
};

export default Carousel;

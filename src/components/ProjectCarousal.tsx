import React, { useState, useEffect } from 'react';

const CircularCarousel = () => {
  const [images, setImages] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    // Initialize images (you can replace these with your actual image URLs)
    const initialImages = Array(7).fill('http://placekitten.com/400/200');
    setImages(initialImages);
    process(initialImages);
  }, []);

  const process = (imageArray) => {
    const totalImages = imageArray.length;
    const centerImageIndex = totalImages % 2 === 0 ? totalImages / 2 - 1 : Math.floor(totalImages / 2);
    const leftImageIndex = centerImageIndex - 1;
    const rightImageIndex = centerImageIndex + 1;

    const newOrder = Array(totalImages).fill('far-left');
    newOrder[centerImageIndex] = 'center';
    newOrder[leftImageIndex] = 'left';
    newOrder[rightImageIndex] = 'right';

    for (let i = rightImageIndex + 1; i < totalImages; i++) {
      newOrder[i] = 'far-right';
    }

    setOrder(newOrder);
  };

  const rotate = (index) => {
    if (order[index] === 'left') {
      setOrder(prevOrder => [...prevOrder.slice(1), prevOrder[0]]);
    } else if (order[index] === 'right') {
      setOrder(prevOrder => [prevOrder[prevOrder.length - 1], ...prevOrder.slice(0, -1)]);
    }
  };

  return (
    <div className="content-block content-block--circular-carousel">
      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-cell-4of4--phone">
            <div className="circular-carousel">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`circular-carousel--image ${order[index]}`}
                  onClick={() => rotate(index)}
                >
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CircularCarousel;
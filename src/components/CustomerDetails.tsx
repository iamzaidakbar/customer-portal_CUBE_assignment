import React, { useState, useEffect } from 'react';
import { Customer } from '../types/customer';
import '../styles/customerDetails.css';
import { generateRandomPhotos } from '../utils/randomImages';
import { truncateText } from '../utils/truncate';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  useEffect(() => {
    // Reset the loaded images and set the initial photos for the selected customer
    setLoadedImages([]);
    setCurrentPhotos(customer.photos);

    const fetchPhotos = () => {
      // Fetch new random photos every 10 seconds
      setCurrentPhotos(generateRandomPhotos(9));
      setLoadedImages([]);
    };

    // Fetch initial photos and set up the interval
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    // Clear the interval if the customer changes or on unmount
    return () => clearInterval(interval);
  }, [customer]);

  const handleImageLoad = (index: number) => {
    // Mark the image as loaded when it finishes loading
    setLoadedImages((prev) => [...prev, index]);
  };

  return (
    <div className="customer-details">
      <h2 className="customer-name">{truncateText(customer.name, 50)}</h2>
      <p className="customer-address">{truncateText(customer.address, 100)}</p>
      <p className="customer-title">{truncateText(customer.title, 150)}</p>
      <div className="photo-grid">
        {currentPhotos?.map((photo, index) => (
          <div key={index} className="photo-container">
            {!loadedImages.includes(index) && <div className="shimmer" />}
            <img
              loading="lazy"
              src={photo}
              alt={`photo-${index}`}
              onLoad={() => handleImageLoad(index)}
              className={loadedImages.includes(index) ? 'loaded' : ''}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;

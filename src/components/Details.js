import React, { useEffect, useState } from 'react';

const Details = () => {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    // Fetch business details from an API or Redux store
    // For demonstration, let's assume we fetch the data from an API
    // Replace 'API_URL' with the actual API endpoint
    fetch('API_URL')
      .then(response => response.json())
      .then(data => setBusiness(data))
      .catch(error => console.error('Error fetching business details:', error));
  }, []);

  useEffect(() => {
    if (business) {
      // Initialize Google Maps
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: business.latitude, lng: business.longitude },
        zoom: 14
      });

      // Add marker for the business location
      new window.google.maps.Marker({
        position: { lat: business.latitude, lng: business.longitude },
        map,
        title: business.name
      });
    }
  }, [business]);

  return (
    <div>
      <h2>Details</h2>
      {business && (
        <div>
          <h3>{business.name}</h3>
          <p>{business.description}</p>
          <p>{business.address}</p>
          <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </div>
      )}
    </div>
  );
};

export default Details;
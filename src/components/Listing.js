import React from 'react';

const Listing = () => {
  // Updated business data
  const businesses = [
    { id: 1, name: 'Lammes Candies', description: 'Candies and Gifts', address: '2927A West Anderson Ln Austin, TX 78757', hours: '9AM - 5PM' },
    { id: 2, name: 'Waterloo Records', description: 'Record Store', address: '600A N Lamar Blvd Austin, TX 78703', hours: '10AM - 6PM' },
    { id: 3, name: 'Ruffles & Rust', description: 'Gift Shop and Home Decor', address: '101 Pecan St W Ste A Pflugerville, TX 78660', hours: '8AM - 4PM' },
  ];

  return (
    <div>
      <h2>Listing</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Operating Hours</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business) => (
            <tr key={business.id}>
              <td>{business.name}</td>
              <td>{business.description}</td>
              <td>{business.address}</td>
              <td>{business.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listing;
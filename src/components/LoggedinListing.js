import React from 'react';

const LoggedInListing = () => {
  // Dummy data for demonstration
  const businesses = [
    { id: 1, name: 'Business 1', description: 'Description 1', address: 'Address 1', hours: '9AM - 5PM' },
    { id: 2, name: 'Business 2', description: 'Description 2', address: 'Address 2', hours: '10AM - 6PM' },
    { id: 3, name: 'Business 3', description: 'Description 3', address: 'Address 3', hours: '8AM - 4PM' },
  ];

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log('Deleting business with id:', id);
  };

  return (
    <div>
      <h2>Logged In Listing</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Operating Hours</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business) => (
            <tr key={business.id}>
              <td>{business.name}</td>
              <td>{business.description}</td>
              <td>{business.address}</td>
              <td>{business.hours}</td>
              <td>
                <button onClick={() => handleDelete(business.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoggedInListing;
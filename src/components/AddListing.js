import React, { useState } from 'react';

const AddListing = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = () => {
    // Implement submit functionality
    console.log('Submitting listing:', { name, description, address, hours });
  };

  return (
    <div>
      <h2>Add Listing</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Operating Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddListing;
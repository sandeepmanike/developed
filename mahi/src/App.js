import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Retrive from './retrive.js'; // Assuming Retrive is a component defined in retrive.js

function Form() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    age: '',
    dateOfBirth: ''
  });
  const [resp, setResp] = useState('');
  const [showRetrive, setShowRetrive] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/c1/enter', formData)
      .then(response => {
        setResp("submitted successfully");
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };
  const handleShowRetrive = () => {
    setShowRetrive(true);
  };

  return (
    <div className="background-image">
      <div className="form-container">
        <h2>Fill the following details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>id:</label>
            <input type="number" name="id" value={formData.id} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
          <span style={{ color: "blue" }}>{resp}</span>
        </form>
      </div>
      <button onClick={handleShowRetrive}>Click here to see the data</button>
        {showRetrive && <Retrive />}
    </div>
    
  );
}

export default Form;

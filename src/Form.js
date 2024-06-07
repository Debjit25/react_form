import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success", { state: formData });
    }
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>First Name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <span className="error">{errors.phoneNumber}</span>
        )}
      </div>
      <div className="form-group">
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          {/* Add other countries as needed */}
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
      </div>
      <div className="form-group">
        <label>City</label>
        <input name="city" value={formData.city} onChange={handleChange} />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>
      <div className="form-group">
        <label>PAN No.</label>
        <input name="pan" value={formData.pan} onChange={handleChange} />
        {errors.pan && <span className="error">{errors.pan}</span>}
      </div>
      <div className="form-group">
        <label>Aadhar No.</label>
        <input name="aadhar" value={formData.aadhar} onChange={handleChange} />
        {errors.aadhar && <span className="error">{errors.aadhar}</span>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>
    </form>
  );
};

export default Form;

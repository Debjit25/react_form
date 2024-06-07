import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>Submission Successful</h1>
      <p>
        <strong>First Name:</strong> {state.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {state.lastName}
      </p>
      <p>
        <strong>Username:</strong> {state.username}
      </p>
      <p>
        <strong>E-mail:</strong> {state.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {state.phoneNumber}
      </p>
      <p>
        <strong>Country:</strong> {state.country}
      </p>
      <p>
        <strong>City:</strong> {state.city}
      </p>
      <p>
        <strong>PAN No.:</strong> {state.pan}
      </p>
      <p>
        <strong>Aadhar No.:</strong> {state.aadhar}
      </p>
    </div>
  );
};

export default Success;

import React from 'react';

function Employee({ name, jobTitle, email }) {
  return (
    <div className="employee-card">
      <h2>{name}</h2>
      <p>{jobTitle}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Employee;

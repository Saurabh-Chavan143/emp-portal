import React from 'react';
import Employee from './Employee';

const employees = [
  {
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    email: 'john@example.com',
  },
  {
    name: 'Jane Smith',
    jobTitle: 'Product Manager',
    email: 'jane@example.com',
  },
  // Add more employees
];

function App() {
  return (
    <div className="App">
      <h1>Employee Portal</h1>
      <div className="employee-list">
        {employees.map((employee, index) => (
          <Employee key={index} {...employee} />
        ))}
      </div>
    </div>
  );
}

export default App;

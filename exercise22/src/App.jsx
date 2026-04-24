import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      ...formData,
      acceptedTerms: isChecked,
      selectedOption,
    });
  };

  return (
    <div>
      <h2>React Form Practice</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
          />
          Accept Terms
        </label>

        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Terms: {submittedData.acceptedTerms ? 'Yes' : 'No'}</p>
          <p>Role: {submittedData.selectedOption}</p>
        </div>
      )}
    </div>
  );
}

export default App;
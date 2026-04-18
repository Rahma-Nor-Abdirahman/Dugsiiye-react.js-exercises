import React, { useReducer } from 'react';
import { formReducer, initialState } from './formReducer';

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const nextStep = () => dispatch({ type: 'NEXT_STEP' });
  const prevStep = () => dispatch({ type: 'PREV_STEP' });
  const resetForm = () => dispatch({ type: 'RESET_FORM' });

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    resetForm();
  };

  return (
    <div>
      <h2>Multi-Step Registration</h2>

      {state.step === 1 && (
        <div>
          <h3>Step 1: Profile</h3>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={state.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={state.lastName}
            onChange={handleChange}
          />

          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h3>Step 2: Contact</h3>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={state.phone}
            onChange={handleChange}
          />

          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h3>Step 3: Review</h3>

          <p>First Name: {state.firstName}</p>
          <p>Last Name: {state.lastName}</p>
          <p>Email: {state.email}</p>
          <p>Phone: {state.phone}</p>

          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
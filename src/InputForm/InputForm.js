import React, { useState } from 'react';
import './InputForm.css';
const InputForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState(Array(10).fill(''));

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Texts for Comic Panels:</h2>
      {inputs.map((text, index) => (
        <div key={index}>
          <label>{`Panel ${index + 1}: `}</label>
          <input
            type="text"
            value={text}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Generate Comic</button>
    </form>
  );
};

export default InputForm;

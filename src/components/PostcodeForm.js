// src/components/PostcodeForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostcodeForm() {
    const [postcode, setPostcode] = useState(''); // State to manage the input value
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${postcode}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className="form-control"
          placeholder="Enter a UK postcode"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );

}

export default PostcodeForm;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostcodeForm from './components/PostcodeForm';
import PostcodeDetails from './components/PostcodeDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostcodeForm />} />
        <Route path="/:postcode" element={<PostcodeDetails />} />
      </Routes>
    </div>
  );
}

export default App;

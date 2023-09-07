import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostcodeDetails() {
  const { postcode } = useParams();
  const [details, setDetails] = useState(null);
  const [nearestPostcodes, setNearestPostcodes] = useState(null);

  useEffect(() => {
    const fetchPostcodeDetails = async () => {
      try {
        const response = await axios.get(`http://api.postcodes.io/postcodes/${postcode}`);
        setDetails(response.data.result);
      } catch (error) {
        console.error('Error fetching postcode details:', error);
      }
    };

    const fetchNearestPostcodes = async () => {
      try {
        const response = await axios.get(`http://api.postcodes.io/postcodes/${postcode}/nearest`);
        setNearestPostcodes(response.data.result);
      } catch (error) {
        console.error('Error fetching nearest postcodes:', error);
      }
    };

    if (postcode) {
      fetchPostcodeDetails();
      fetchNearestPostcodes();
    }
  }, [postcode]);

  if (!details || !nearestPostcodes) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Details for {postcode}</h2>
      <div className="row">
        <div className="col-md-6">
          <p><strong>Country:</strong> {details.country}</p>
          <p><strong>Region:</strong> {details.region}</p>
        </div>
      </div>

      <h2>Nearest Postcodes</h2>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {nearestPostcodes.map((postcode) => (
              <li key={postcode.postcode} className="list-group-item">
                {postcode.postcode} - {postcode.country} - {postcode.region}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostcodeDetails;

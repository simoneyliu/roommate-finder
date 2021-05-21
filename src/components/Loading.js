import React from 'react';
import '../styles/loading.scss';
import ZipCodes from 'zipcodes';

export function Loading(props) {
  const handleGetStarted = () => {
    props.isLoading(false);
  };

  return (
    <div className='loading-page'>
      <div className='app-name'>
        <h1>Roomy</h1>
        <div className='input-icons'>
          <input className='input-field' type='number' placeholder="&#x1f4cc; Zipcode" />
        </div>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
}

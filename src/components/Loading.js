import React from 'react';
import '../styles/loading.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export function Loading(props) {
  const handleGetStarted = () => {
    props.isLoading(false);
  };
  return (
    <div className='loading-page'>
      <div className='app-name'>
        <h1>Roomy</h1>
        <div className='input-icons'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <input className='input-field' type='text' placeholder='Zipcode' />
        </div>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
}

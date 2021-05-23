import React, { useState } from 'react';
import '../styles/loading.scss';
import ZipCodes from 'zipcodes';

export function Loading(props) {
  const [isValid, setIsValid] = useState(0);
  const [zip, setZip] = useState(null);
  const handleGetStarted = () => {
    props.isLoading(false);
  };

  const handleZipcode = (e) => {
    if (e.target.value.length === 5) {
      let zipcode = ZipCodes.lookup(e.target.value);
      if (zipcode) {
        setIsValid(true);
        setZip(zipcode);
      } else {
        setIsValid(5);
      }
    } else {
      setIsValid(0);
      setZip(null);
    }
  };

  const showCityState = () => {
    if (zip) {
      return (
        <div className='zip-info'>
          {zip.city}, {zip.state}
        </div>
      );
    } else if (isValid === 5 && !zip) {
      return <div className='zip-info'>Not Found</div>;
    } else {
      return <div className='zip-info opacity-zero'>Not Found</div>;
    }
  };

  return (
    <div className='loading-page'>
      <div className='app-name'>
        <h1 id='app-title'>Roomy</h1>
        <div className='input-icons'>
          <input onKeyUp={handleZipcode} className='input-field' type='text' pattern='\d*' placeholder='&#x1f4cc; Zipcode' maxLength='5' />
        </div>
        {showCityState()}
        <button disabled={zip ? false : true} className='get-started-button' style={{ opacity: zip ? 1 : 0.3 }} onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

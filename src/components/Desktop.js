import React from 'react';
import mainLogo from '../assets/iPhone 12 Mockup.png';
import '../styles/desktop.scss';

export function Desktop() {
  return (
    <div className='desktop-page'>
      <img className='desktop-ad' src={mainLogo} alt='iphone12' />
    </div>
  );
}

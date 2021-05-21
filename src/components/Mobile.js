import React from 'react';
import '../styles/mobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

export function Mobile() {
  return (
    <div>
      You are on Mobile
      <div className="footer">
        <BottomNavigation
          value={'Recents'}
          onChange={(event, newValue) => {
            //   setValue(newValue);
          }}
          showLabels
          className="">
          <BottomNavigationAction label="Home" icon={<FontAwesomeIcon icon={faHome} />} />
          <BottomNavigationAction label="Search" icon={<FontAwesomeIcon icon={faSearch} />} />
          <BottomNavigationAction label="Saved" icon={<FontAwesomeIcon icon={faHeart} />} />
          <BottomNavigationAction label="Profile" icon={<FontAwesomeIcon icon={faUser} />} />
        </BottomNavigation>
      </div>
    </div>
  );
}

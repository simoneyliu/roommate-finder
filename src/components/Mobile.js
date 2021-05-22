import React, { useState } from 'react';
import '../styles/mobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInbox, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from './Home';
import { Search } from './Search';
import { Profile } from './Profile';
import { Inbox } from './Inbox';
import AppBarMenu from './AppBarMenu';
import { Loading } from './Loading';

export function Mobile() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const handlePageChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleGetStarted = (isLoading) => {
    setLoading(isLoading);
  };

  const routeToPage = () => {
    if (value === 0) {
      return <Home />;
    } else if (value === 1) {
      return <Search />;
    } else if (value === 2) {
      return <Inbox />;
    } else if (value === 3) {
      return <Profile />;
    }
  };

  const useStyles = makeStyles({
    root: {
      background: '#FCFCFC',
      border: 0,
    },
  });

  const classes = useStyles();

  return (
    <>
      {loading ? (
        <Loading isLoading={handleGetStarted} />
      ) : (
        <div className='page-mobile'>
          <AppBarMenu />
          <div className='page-content'>{routeToPage()}</div>
          <div className='footer'>
            <BottomNavigation
              value={value}
              onChange={handlePageChange}
              showLabels
              classes={{
                root: classes.root,
              }}
              className='MuiPaper-elevation4'>
              <BottomNavigationAction label='Home' icon={<FontAwesomeIcon icon={faHome} />} />
              <BottomNavigationAction label='Search' icon={<FontAwesomeIcon icon={faSearch} />} />
              <BottomNavigationAction label='Inbox' icon={<FontAwesomeIcon icon={faInbox} />} />
              <BottomNavigationAction label='Profile' icon={<FontAwesomeIcon icon={faUser} />} />
            </BottomNavigation>
          </div>
        </div>
      )}
    </>
  );
}

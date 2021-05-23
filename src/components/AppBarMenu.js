import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CustomButton } from './CustomButton';
import '../styles/appBarMenu.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Berkshire Swash',
    fontWeight: 'bold',
  },
  backgroundColor: {
    background: '#FCFCFC',
    color: 'black',
  },
}));

export default function AppBarMenu() {
  const classes = useStyles();
  const [tab, setTab] = useState(true);

  const onTabClick = () => {
    setTab(!tab);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.backgroundColor} position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' className={classes.title}>
            Roomy
          </Typography>
          <Button color='inherit'>Map</Button>
        </Toolbar>
        <div className='button-container'>
          <CustomButton onTabClick={onTabClick} label='Room' isSelected={tab} isDisabled={false} />
          <CustomButton onTabClick={onTabClick} label='Roommate' isSelected={!tab} isDisabled={false} />
        </div>
      </AppBar>
    </div>
  );
}

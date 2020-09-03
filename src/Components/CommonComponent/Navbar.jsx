import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { useHistory,Link } from 'react-router-dom';
import './Navbar.css';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Navbar() {
    const classes = useStyles();
    let history = useHistory();
  const homeRouter=(path)=>{
        history.push(path);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           <Link to='/' className="logo-name">MERN STACK STORE</Link> 
          </Typography>
          <Button color="inherit" onClick={()=> homeRouter('/')}>HOME</Button>
          <Button color="inherit">
          <Badge badgeContent={4} color="secondary">
             Cart
            </Badge>
          </Button>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}



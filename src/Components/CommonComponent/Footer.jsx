import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import './Footer.css';
export default function Footer() {
    const[currentDate]=useState(new Date().getFullYear());
    return (
        <React.Fragment>
        <AppBar position="static">
        
        <Typography variant="body2" className="footer-box"  component="h4">
          Made by Rana Usman Creative © {currentDate}
        </Typography>
        
        </AppBar>
        </React.Fragment>
    )
}

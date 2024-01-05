// Import necessary Material-UI components
import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  Menu,
} from '@mui/material';
import './navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [ageAnchorEl, setAgeAnchorEl] = React.useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);

  const handleAgeClick = (event) => {
    setAgeAnchorEl(event.currentTarget);
  };

  const handleAgeClose = () => {
    setAgeAnchorEl(null);
  };

  const handleCategoryClick = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setCategoryAnchorEl(null);
  };

  const handleLoginClick = () => {
    // Handle login logic
  };
 

  return (
    <div className="navbarRoot">
      <AppBar position="static" style={{ backgroundColor:"#383636" }}>
        <Toolbar className="toolbar">
          <div>
          <Button color="inherit" style={{ fontFamily: 'Comic Sans MS',color:'violet',fontSize:'25px',letterSpacing:'1px',fontWeight:'bold',fontStyle:'italic'}}>TOYT</Button>
             <Link to='./'>
            <Button color="inherit" style={{ fontFamily: 'Comic Sans MS',color:'violet',fontSize:'16px',letterSpacing:'1px',paddingLeft:'50px'}}>Home</Button>
            </Link>
            <Button color="inherit" onClick={handleAgeClick}style={{ fontFamily: 'Comic Sans MS',color:'violet',fontSize:'16px',letterSpacing:'1px',paddingLeft:'30px'}}>
              Shop by Age
            </Button>
            <Menu
              anchorEl={ageAnchorEl}
              open={Boolean(ageAnchorEl)}
              onClose={handleAgeClose}
            >
              <Link to='./agezero'style={{ textDecoration:'none',color:"black"}}>
              <MenuItem onClick={handleAgeClose}>0- 11 Months</MenuItem>
              </Link>
              <Link to='./ageone'style={{ textDecoration:'none',color:"black"}}>
              <MenuItem onClick={handleAgeClose}>1-6 Yrs</MenuItem>
              </Link>
              <Link to='./ageseven'style={{ textDecoration:'none',color:"black"}}>
              <MenuItem onClick={handleAgeClose}>7 - 18 Yrs</MenuItem>
              </Link>
              <Link to='./ageadult'style={{ textDecoration:'none',color:"black"}}>
              <MenuItem onClick={handleAgeClose}>Grown-ups</MenuItem>
              </Link>
            </Menu>

        
            <Button color="inherit" onClick={handleCategoryClick}  style={{ fontFamily: 'Comic Sans MS',color:'violet',fontSize:'16px',paddingLeft:'30px',letterSpacing:'1px'  }}>
              Shop by Category
            </Button>
            <Menu
              anchorEl={categoryAnchorEl}
              open={Boolean(categoryAnchorEl)}
              onClose={handleCategoryClose}
            >
               <Link to='./board'style={{ textDecoration:'none',color:"black"}}>
              <MenuItem onClick={handleCategoryClose}>Board games</MenuItem>
              </Link>
              <Link to='./toycar'style={{ textDecoration:'none',color:"black"}}>
              <MenuItem onClick={handleCategoryClose}>Toy Cars,Vehicles</MenuItem>
              </Link>
              <Link to='./puzzles'style={{ textDecoration:'none',color:"black"}}>
              <MenuItem onClick={handleCategoryClose}>Puzzles</MenuItem>
              </Link>
              <Link to='./art'style={{ textDecoration:'none',color:"black"}}>
              <MenuItem onClick={handleCategoryClose}>Art & Craft Games</MenuItem>
              </Link>
            </Menu>
          </div>

          <Link to='/login'>
          <Button
            
            className="loginButton"
            onClick={handleLoginClick}
            style={{ fontFamily: 'Comic Sans MS',color:'violet',fontSize:'16px',letterSpacing:'1px' }}
          >
           Login
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;



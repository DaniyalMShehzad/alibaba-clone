import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ChatIcon from '@mui/icons-material/Chat';
import LoginIcon from '@mui/icons-material/Login';


export default function ButtonAppBar() {
  return (
    <div className="box">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
          className="iconbtn"
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            AliBaba.com
          </Typography>
          <div className="supply" >
          <select className="choose">
                <option>Products</option>
                <option>Suppliers</option>
             </select>
          <input className="inputtexttype" type="text" placeholder="What Are You Looking For" />
          <input className="submitbutton" type="submit" placeholder="Search" />
          </div>
          <Button className="logo1"><LoginIcon/><br/>Sign in<br/>for free</Button>
          <Button className="logo2"><ChatIcon/><br/>Messages</Button>
          <Button className="logo3">$<br/>orders</Button>
          <Button className="logo4"><AddShoppingCartIcon/><br/>cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

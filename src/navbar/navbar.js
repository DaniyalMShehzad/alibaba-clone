import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UploadButtons from './upload';
import LoginIcon from '@mui/icons-material/Login';
import MessageIcon from '@mui/icons-material/Message';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function ButtonAppBar() {
  return (
    <div className="box">
    <Box sx={{ flexGrow:5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography className="flexgrow" variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <b>AliBaba.com</b>
          </Typography>
          <div className="choise">
          <select className="choose">
                <option className="clas">Products</option>
                <option className="clas">Suppliers</option>
             </select>
          <input className="inputtexttype" type="text" placeholder="What Are You Looking For" />
          <UploadButtons/>
          <input className="submitbutton" type="submit" placeholder="Search" />
          </div>
          <Button className="logo2"><LoginIcon/><p className="buttonp">Sign in for free</p></Button>
          <Button className="logo2"><MessageIcon/><p className="buttonp">Messages</p></Button>
          <Button className="logo2">$<p className="buttonp">orders</p></Button>
          <Button className="logo1"><AddShoppingCartIcon/><p>cart</p></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UploadButtons from './upload';


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
          <Button className="logo1"><br/>Sign in<br/>for free</Button>
          <Button className="logo2"><br/>Messages</Button>
          <Button className="logo3">$<br/>orders</Button>
          <Button className="logo4"><br/>cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

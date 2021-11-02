import * as React from 'react';
import {TextField,Box} from '@mui/material';
function Footer(){
    return(
        <>
    <div className="footer">
        <div className="input">
        <p className="area2">Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' , },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      className="textfield"
      id="outlined-basic" 
      label="Outlined" 
      variant="outlined"
      />
      </Box>
      <p className="area">We’ll never share your email address with a third-party.</p>
        </div>
        <div className="ul">
        <ul className="li">
            <li><h3>Customer Services</h3></li>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Report Abuse</li>
            <li>Submit a Dispute</li>
            <li>Policies & Rules</li>
            <li>Get Paid for Your Feedback</li>
        </ul>
        <ul className="li">
            <li><h3>About Us</h3></li>
            <li>About Alibaba.com</li>
            <li>About Alibaba Group</li>
            <li>Sitemap</li>
        </ul>
        <ul className="li">
            <li><h3>Source on Alibaba.com</h3></li>
            <li>Resources</li>
            <li>All Categories</li>
            <li>Request for Quotation</li>
            <li>Ready to Ship</li>
            <li>Buyer Partners</li>
        </ul>
        <ul className="li">
            <li><h3>Sell on Alibaba.com</h3></li>
            <li>Supplier Memberships</li>
            <li>Learning Center</li>
            <li>Partner Program</li>
        </ul>
        <ul className="li">
            <li><h3>Trade Services</h3></li>
            <li>Trade Assurance</li>
            <li>Business Identity</li>
            <li>Logistics Service</li>
            <li>Production Monitoring & Inspection Services</li>
            <li>Letter of Credit</li>
        </ul>
        </div>
    </div>
        </>
    )
}

export default Footer












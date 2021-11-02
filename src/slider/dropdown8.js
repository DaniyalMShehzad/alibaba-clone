
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    "Machinery","/","Vehicles & Accessories","/","Vehicles & Transportation",
    "Consumer Electronics","/","Home Appliances",
    "Apparel","/","Fashion Accessories","/","Timepieces, Jewelry, Eyewear",
    "Lights & Lighting","/","Construction & Real Estate",
    "Home & Garden / Furniture","/","Fabric & Textile Raw Material",
    "Beauty & Personal Care","/","Health & Medical",
    "Packaging & Printing","/","Office & School Supplies / Testing Instrument & Equipment",
    "Tools & Hardware","/","Security","/","Safety","/","Fabrication Services",
    "Electrical Equipment & Supplies","/","Electronic Components, Accessories & Telecommunications",
    "Sports & Entertainment","/","Toys & Hobbies","/","Gifts & Crafts",
    "Luggage, Bags & Cases","/","Shoes & Accessories",
    "Metals & Alloys", "/", "Chemicals","/"," Rubber & Plastics",
    "Agriculture","/","Food & Beverage",
    "Commercial Service Equipment","/","Business Services",
    "Renewable Energy","/","Energy Chemicals","/","Environment",
    "Power Transmission","/","Material Handling"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect8() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-multiple-name-label">All Categories</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
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
    "Baby Supplies & Products"
    ,"Baby Feeding Supplies"
    ,"Changing Pad & Cover"
    ,"Other Baby Supplies"
    ,"Potty Training"
    ,"Safety"
    ,"Strollers, Walkers & Carriers"
    ,"Bathroom Products"
    ,"Basins"
    ,"Bath Mats"
    ,"Bath Pillows"
    ,"Bathroom Sets"
    ,"Other Bath & Toilet Supplies"
    ,"Shower Caps"
    ,"Garden Supplies"
    ,"BBQ"
    ,"Garden Buildings"
    ,"Garden Landscaping & Decking"
    ,"Garden Pots & Planters"
    ,"Household Thermometers"
    ,"Mailboxes"
    ,"Home Decor"
    ,"Artificial Plants and Flowers"
    ,"Blinds, Shades & Shutters"
    ,"Candles & Home Fragrance"
    ,"Clocks"
    ,"Curtain Poles, Tracks & Accessories"
    ,"Decorative Accents"
    ,"Home Storage & Organization"
    ,"Closet Storage & Organization"
    ,"Clothes Stands & Shoe Racks"
    ,"Drawers & Cabinet Organizers"
    ,"Drawers & Carts"
    ,"Garage Shelves"
    ,"Hangers"
    ,"Household Cleaning Tools & Accessories"
    ,"Aprons"
    ,"Brooms & Dustpans"
    ,"Buckets"
    ,"Cleaning Brushes"
    ,"Cleaning Cloths"
    ,"Dusters"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect6() {
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
        <InputLabel id="demo-multiple-name-label">Home & Garden</InputLabel>
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
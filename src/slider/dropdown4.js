
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
    "Amusement Park"
    ,"Amusement Park Rides"
    ,"Amusement Tunnel"
    ,"Animatronic Model"
    ,"Bumper Cars"
    ,"Climbing Walls"
    ,"Other Amusement Park Products"
    ,"Boats & Ships"
    ,"Barge"
    ,"Cabin Cruiser"
    ,"Cargo Ship"
    ,"Fishing Vessel"
    ,"Other Boats"
    ,"Parts & Accessories"
    ,"Fitness & Body Building"
    ,"Balance Training"
    ,"Boxing"
    ,"Cardio Training"
    ,"Fitness Accessories"
    ,"Martial Arts"
    ,"Outdoor Fitness Equipment"
    ,"Gambling"
    ,"Bingo"
    ,"Dice"
    ,"Gambling Tables"
    ,"Other Gambling Products"
    ,"Playing Cards"
    ,"Poker Chips"
    ,"Cycling"
    ,"Bicycle"
    ,"Bicycle Accessories"
    ,"Bicycle Parts"
    ,"Electric Bicycle"
    ,"Electric Bicycle Part"
    ,"Artificial Grass & Sports Flooring"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect4() {
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
        <InputLabel id="demo-multiple-name-label">Sports And Entertainment</InputLabel>
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
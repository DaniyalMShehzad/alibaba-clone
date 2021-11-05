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
    "Camera", "Photo & Accessories",
    "Action & Sports","Camera",
    "Action & Sports Camera Accessory",
    "Baby & Pet Monitor",
    "Backgrounds",
    "Battery Grip",
    "Camera Filters",
    "Chargers,Batteries & Power Supplies",
    "Battery Accessories",
    "Battery Case",
    "Battery Charger",
    "Charger & Adapter",
    "Charging Stand & Holder",
    "Charging Station & Power Station",
    "Commonly Used Accessories & Parts",
    "Adapters & Connectors",
    "Cable",
    "Card Readers",
    "Cleaners",
    "Digital Lighters & Parts",
    "Electronic Organizers",
    "Computer Hardware & Software",
    "All in One Computers",
    "Blank Disks",
    "CPUs",
    "Computer Cases & Towers",
    "Desktops",
    "Fans & Cooling",
    "Electronic Cigarettes",
    "Box Mod",
    "Electronic Cigarette Accessories",
    "Heat not burn",
    "Herb Vaporizers",
    "Other Electronic Cigarettes",
    "Vape pen",
    "Earphone & Headphone",
    "Earphone Accessories",
    "Earphones & Headphones"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect1() {
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
        <InputLabel id="demo-multiple-name-label">Costumers</InputLabel>
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

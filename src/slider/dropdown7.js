
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
    "Bath Supplies"
    ,"Bath Beads"
    ,"Bath Brushes, Sponges & Scrubbers"
    ,"Bath Fizzies"
    ,"Bath Oil"
    ,"Bath Powder"
    ,"Bath Salt"
    ,"Body Art"
    ,"Airbrush"
    ,"Body Painting Supplies"
    ,"Other Body Art"
    ,"Tattoo Grip"
    ,"Tattoo Gun"
    ,"Tattoo Ink"
    ,"False Eyelashes & Tools"
    ,"Eyelash Extension Kits"
    ,"Eyelash Extensions"
    ,"Eyelash Glue"
    ,"Eyelash Glue Remover"
    ,"Eyelash Tweezers"
    ,"Fan Eyelashes"
    ,"Baby Care"
    ,"Baby's Bath Supplies"
    ,"Baby's Hair Care & Styling Products"
    ,"Baby's Skin Care"
    ,"Children & Baby's Makeup"
    ,"Beauty Equipment"
    ,"Beauty Salon Equipment"
    ,"Home Use Beauty Equipment"
    ,"Breast Care"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect7() {
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
        <InputLabel id="demo-multiple-name-label">Beauty & Personal Care</InputLabel>
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
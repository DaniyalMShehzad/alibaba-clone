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
    "Baby Clothing",
"Baby T-Shirts",
"Baby bibs",
"Baby clothing sets",
"Baby dresses",
"Baby hoodies&sweatshirts",
"Baby jackets&outwears",
"Garment & Processing Accessories",
"Badges",
"Boning",
"Braid",
"Buckles",
"Buttons",
"Cords",
"Men's Clothing",
"Men's Coats",
"Men's Down Coat",
"Men's Hoodies & Sweatshirts",
"Men's Jackets",
"Men's Jeans",
"Men's Leggings",
"Childrens Clothing",
"Boys Clothing",
"Boys Clothing(old)",
"Family Matching Outfits",
"Girls Clothing",
"Girls Clothing(old)",
"Novelty & Special Use",
"Costumes",
"Ethnic Clothing",
"Stage & Dance Wear",
"Uniforms",
"Infant & Toddlers Clothing(old)",
"Baby Socks(old)",
"Baby Swimwear",
"Other Baby Clothing(old)",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect2() {
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
        <InputLabel id="demo-multiple-name-label">Apparel</InputLabel>
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

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
"Agricultural Machinery & Equipment"
,"Agricultural Machinery Parts"
,"Agricultural Sprayer"
,"Animal & Poultry Husbandry Equipment"
,"Aquaculture Machine Aerators"
,"Balers"
,"Biomass Briquette Machines"
,"Apparel & Textile Machinery"
,"Apparel & Textile Machinery Parts"
,"Apparel Machinery"
,"Cap Making Machines"
,"Glove Making Machines"
,"Home Textile Product Machinery"
,"Ironing & Washing Equipments"
,"Building Material Machinery"
,"Board Making Machinery"
,"Brick Making Machinery"
,"Building Material Making Machinery Parts"
,"Cement Making Machinery"
,"Dry Mortar Machines"
,"Duct Making Machines"
,"Cleaning Equipment"
,"Air Cleaning Equipment"
,"Cleaning Equipment Parts"
,"Corner Cleaning Machines"
,"Disinfecting Equipment"
,"Filtration Equipment"
,"Floor Sweeper"
,"Chemical & Pharmaceutical Machinery"
,"Chemical Machinery & Equipment"
,"Cosmetics Production Equipment"
,"Crystallizer"
,"Pharmaceutical Machinery"
,"Electric Equipment Making Machinery"
,"Busbar Machine"
,"Transformer Making Equipment"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect5() {
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
        <InputLabel id="demo-multiple-name-label">Machinery</InputLabel>
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
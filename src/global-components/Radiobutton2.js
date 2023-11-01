import * as React from 'react';
import {Radio,RadioGroup,FormControl,FormControlLabel,Stack,Grid} from '@mui/material';

export default function RowRadioButtonsGroup(props) {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return (
    <Stack  direction={'row'} alignItems={'center'} mt={2}>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value={selectedValue}
        name="row-radio-buttons-group"
      ><Grid item style={{position:'relative',marginRight:'20px',color:'#6F7482'}}>{props.content}</Grid>
        <FormControlLabel value="Yes"  control={<Radio {...controlProps('Yes')} size="small"/>} label="Yes"/>
        <FormControlLabel value="No"  control={<Radio {...controlProps('No')} size="small"/>} label="No" />
      </RadioGroup>
    </FormControl>

  </Stack>);
}

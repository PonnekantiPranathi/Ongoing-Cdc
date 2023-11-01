import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Divider,Box,Grid,Typography,TextField} from '@material-ui/core';
import { FormLabel, Stack,Button } from '@mui/material';
import { LocalizationProvider,DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import RowRadioButtonsGroup from '../../global-components/Radiobutton';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonGroup from '../../global-components/ButtonGroup';import useMediaQuery from '@mui/material/useMediaQuery';
import { validateTextField } from '../../global-components/Validate';


const useStyles = makeStyles(theme => ({

  formContainer: {padding: theme.spacing(5),borderRadius: 10,
    backgroundColor:'#F0F4FE'},
  savechangesButton: {marginTop: theme.spacing(2),borderSpacing:'4',marginLeft:'20.76vw',borderRadius:'10px',color:'#FFFFFF',},
  nextButton: {marginTop: theme.spacing(2),borderSpacing:'4',marginLeft:'3.56vw',color:'#FFFFFF',borderRadius:'10px',backgroundColor:'green',},
  datePicker: {backgroundColor: '#FFFFFF', borderRadius: '4px', width:'23.35vw',
    '& input': {
      backgroundColor: '#FFFFFF',},},
    title: {fontSize:'16px',color:'#6F7492'},
}));
const inputStyle = {height:'5.76vh', width:'28.59vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };
const inputStyle1 = {height:'14.423vh', width:'63.75vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };
const inputStyle2 = {height:'5.76vh', width:'23.35vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };
const inputStyle3 = {height:'3.37vh', width:'4.92vw',marginBottom:'20px',marginLeft:'2.34vw',backgroundColor:'#FFFFFF', };
const asterisk = {color: 'red', };


const JD = ({onclose,onButton,onButton1,onButton2,onButton3}) => {


  const [textFieldValue1, setTextFieldValue1] = useState('');
  const [textFieldValue2, setTextFieldValue2] = useState('');
  const [textFieldValue3, setTextFieldValue3] = useState('');
  const [textFieldValue4, setTextFieldValue4] = useState('');

  const handleChange1 = (event) => {
    const { value } = event.target;
    setTextFieldValue1(value);}
  const handleChange4 = (event) => {
      const { value } = event.target;
      setTextFieldValue4(value);};  


  const handleChange2 = (event) => {
        const { value } = event.target;
        setTextFieldValue2(value);}
      
      
    const handleChange3 = (event) => {
      const { value } = event.target;
      setTextFieldValue3(value);}
  
    const handle = () => {
      const isValid = validateTextField(textFieldValue1,'text');
      const isValid2 = validateTextField(textFieldValue2,'text');
      const isValid3 = validateTextField(textFieldValue3,'text');
      const isValid4 = validateTextField(textFieldValue4,'text');
      if(isValid && isValid2 && isValid3 && isValid4){
        onButton(true);
      }
      else if (!isValid) {
        alert('Job Role should be filled.');}
       else if (!isValid2) {
        alert('Job Designation should be filled.');}
        else if (!isValid3) {
        alert('Job Description should be filled.');}
        else if (!isValid4) {
          alert('Job Location should be filled.');}
    }
        

  const handleBUTTON = () => {
    onclose(true);
  }
  const handlebutton = () =>
  {
    onButton(true);
  }
  const handlebutton1 = () =>
  {
    onButton1(true);
  }
  const handlebutton2 = () =>
  {
    onButton2(true);
  }
  const handlebutton3 = () =>
  {
    onButton3(true);
  }
  const classes = useStyles();
  
  return (
    <Stack direction={'column'} mt={{md:'6.73vh', sm:'22.81vh'}}ml={{md:'14.4vw',sm:'5.81vw'}} height={{md:'86.53vh',sm:'76.53vh'}} width={{md:'71.875vw',sm:'85.5vw'}}  className={classes.formContainer}  elevation={10}>
    <Stack direction={'row'} mb={2} justifyContent={'space-between'}><Typography ><b>JOB ROLE 1</b></Typography><IconButton aria-label="delete"  onClick={handleBUTTON} ><ClearIcon fontSize='large'/></IconButton></Stack>
    <Grid item  style={{fontFamily:'poppins',fontSize:'32px',color:'#1E53D7',marginTop:'-25px',marginBottom:'10px'}}>Job Description</Grid>
          <Stack height={{md:'53.24vh',sm:'64.24vh'}}
  sx={{overflow: 'scroll',WebkitOverflowScrolling: 'touch', 
    '&::-webkit-scrollbar': {width: '12px',height:'1px'},
    '&::-webkit-scrollbar-thumb': {backgroundColor: '#1E53D740', borderRadius: '6px', width:'2px'},}}>
    <Grid item>
     <Typography variant="h6" color={'grey'} className={classes.title}>Job Role<Box component="span" style={asterisk}>*</Box></Typography> 
        <TextField placeholder="Text" variant="outlined" onChange={handleChange1}  value={textFieldValue1}  InputProps={{style: inputStyle,}}/>
        </Grid>
      <Grid item mb={2}>
      <Typography variant="h6" color={'blue'} className={classes.title}>Job Designation<Box component="span" style={asterisk}>*</Box>    </Typography> 
      <TextField placeholder="Text" variant="outlined" onChange={handleChange2}  value={textFieldValue2} InputProps={{style: inputStyle,}}/>
        </Grid>
      <Grid item mb={2} mt={10}>
      <Typography variant="h6" className={classes.title}>Job Description <Box component="span" style={asterisk}>*</Box> </Typography> 
        <TextField  label="Text"  multiline  variant="outlined" onChange={handleChange3}  value={textFieldValue3}InputProps={{style: inputStyle1,}}/>
        </Grid>
        <Grid item mb={10}>
      <Typography variant="h6" className={classes.title}>Job Location<Box component="span" style={asterisk}>*</Box></Typography> 
        <TextField placeholder='Text' variant="outlined" onChange={handleChange4}  value={textFieldValue4} InputProps={{style: inputStyle2,}}/>
        </Grid>
        <RowRadioButtonsGroup content="Bond:" variable="Type:"/>
        <Grid item mb={10}>
      <Typography variant="h6" className={classes.title}>Joining Date</Typography> 
      <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className={classes.datePicker}/>
            </LocalizationProvider>
        </Grid>
        <br/>
        <Stack direction={'column'} spacing={2}>
         <Stack direction={'row'}  style={{position:'relative',color:'#6F7482'}} >Expected Number of Hires:      
        <TextField arial-invalid="false" type="number" variant="outlined" InputProps={{style: inputStyle3,}}  /></Stack>
        <Stack direction={'row'} style={{position:'relative',color:'#6F7482'}} spacing={2}>Number of Working weekdays:      
        <TextField arial-invalid="false" type="number"  variant="outlined" InputProps={{style: inputStyle3,}}/></Stack>
        </Stack>
        <Grid item>
        <Button
         variant="contained"
         color="primary"
         className={classes.savechangesButton}
         sx={{backgroundColor:'blue'}}
         >Save Changes
         </Button> 
         <Button
         variant="contained"
         color="primary"
         className={classes.nextButton}
         onClick={handle}
         > Save & Next
        </Button> 
         </Grid><br/><br/>
          </Stack>
          <Divider/>
          <br/>
          <ButtonGroup onEC={handlebutton} onJD={handlebutton1} onPD={handlebutton2} onSP={handlebutton3}/>
      </Stack>
  );
};

export default JD;

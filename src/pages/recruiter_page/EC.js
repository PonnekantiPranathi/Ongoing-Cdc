import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography,TextField,Grid,Box,Button} from '@material-ui/core';
import RowRadioButtonsGroup from '../../global-components/Radiobutton';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import RowRadioButtons from '../../global-components/Radiobutton2';
import { Stack } from '@mui/material';import {Divider} from '@material-ui/core';
import ButtonGroup1 from '../../global-components/ButtonGroup1';
import MultiSelect from "../../global-components/Multiselect";


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

const inputStyle = {height:'7.61vh', width:'28.59vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };
const inputStyle1 = {height:'10.53vh', width:'63.33vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };
const asterisk = {color: 'red', };
const Array1 = [{label:"BTech",value:"BTech"},{label:"MTech",value:"MTech"},{label:"PHD",value:"PHD"}];  
const Array2 = [{label:"Computer Science",value:"Computer Science"},{label:"Mathematics and Computing",value:"Mathematics and Computing"},{label:"Electrical",value:"Electrical"},{label:"Mechanical",value:"Mechanical"}];  

const Recruiter_EC = ({onclose,onButton,onButton1,onButton2,onButton3}) => {
    const handleBUTTON = () => {
      onclose(true);
    };
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

    let ec= true;
    const [value, setValue] = useState([]);
    const classes = useStyles();
    return (
      <Stack direction={'column'} mt={{md:'6.59vh', sm:'32.81vh'}}ml={{md:'16.4vw',sm:'3.81vw'}} height={{md:'88.29vh',sm:'78.29vh'}} width={{md:'71.64vw',sm:'61.64vw'}}  className={classes.formContainer}  elevation={10}>
      <Stack direction={'row'} mb={2} justifyContent={'space-between'}><Typography ><b>JOB ROLE 1</b></Typography><IconButton aria-label="delete"  onClick={handleBUTTON} ><ClearIcon fontSize='large'/></IconButton></Stack>
      <Grid item  style={{fontFamily:'poppins',fontSize:'32px',color:'#1E53D7',marginTop:'-45px',marginBottom:'10px'}}>Eligibility Criteria</Grid>
          <Stack height={'53.24vh'}
    sx={{overflow: 'scroll',WebkitOverflowScrolling: 'touch', 
    '&::-webkit-scrollbar': {width: '12px',height:'0.5px'},
    '&::-webkit-scrollbar-thumb': {backgroundColor: '#1E53D740', borderRadius: '6px', width:'20px',lineHeight:'2px'},}}>
        <Grid item>
       <Typography variant="h2" className={classes.title}>Programs   <Box component="span" style={asterisk}>*</Box>    </Typography> 
       <MultiSelect items={Array1} 
      placeholder="Text"
      onChange={setValue}/></Grid>
      <Grid item>
        <Typography variant="h2" className={classes.title}>Branch      </Typography> 
        <MultiSelect items={Array2} 
      placeholder="Text"
      onChange={setValue}/></Grid>
      <Grid item>
        <Typography variant="h2" className={classes.title}>  CPI      </Typography> 
        <TextField placeholder="Text" variant="outlined"  InputProps={{style: inputStyle,}}/></Grid>
          <RowRadioButtonsGroup content="Can students with backlogs apply?" variable="No. of Backlogs allowed:"/>
          <RowRadioButtons content="Can students of older batches(not 2024) apply?"/><br/>
      <Grid item>
        <Typography variant="h4" className={classes.title}>
          Any Other Criteria      
        </Typography> 
        <TextField  label="Text"  multiline  variant="outlined" InputProps={{style: inputStyle1,}}/>
        </Grid>
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
         > Save & Next
        </Button> 
         </Grid><br/>  
        </Stack>
        <Divider/><br/>
          <ButtonGroup1 onEC={handlebutton} onJD={handlebutton1} onSP={handlebutton3} onPD={handlebutton2} />
      </Stack>
    );
  };
  
  export default Recruiter_EC;
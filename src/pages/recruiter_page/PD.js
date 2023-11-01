import {Typography,TextField,IconButton,Box,Stack,Grid,Button,Divider} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from '@mui/icons-material/Clear';
import ButtonGroup2 from '../../global-components/ButtonGroup2';
import { makeStyles } from '@material-ui/core/styles';


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
  export default function PackageDetails({onclose,onButton,onButton1,onButton2,onButton3}){
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
      const classes = useStyles();
    return (<>
        <Stack direction={'column'} mt={{md:'6.73vh', sm:'22.81vh'}}ml={{md:'14.4vw',sm:'5.81vw'}} height={{md:'86.53vh',sm:'76.53vh'}} width={{md:'71.875vw',sm:'85.5vw'}}  className={classes.formContainer}  elevation={10}>
        <Stack direction={'row'} mb={2} justifyContent={'space-between'}><Typography ><b>JOB ROLE 1</b></Typography><IconButton aria-label="delete"  onClick={handleBUTTON} ><ClearIcon fontSize='large'/></IconButton></Stack>
        <Grid item  style={{fontFamily:'poppins',fontSize:'32px',color:'#1E53D7',marginTop:'-25px',marginBottom:'10px'}}>Package Details</Grid>
              <Stack height={{md:'53.24vh',sm:'64.24vh'}}
      sx={{overflow: 'scroll',WebkitOverflowScrolling: 'touch', 
        '&::-webkit-scrollbar': {width: '12px',height:'1px'},
        '&::-webkit-scrollbar-thumb': {backgroundColor: '#1E53D740', borderRadius: '6px', width:'2px'},}}>
            <Grid item xs={6} textAlign="right">
              <Box height={70}></Box>
            </Grid>
            <Stack direction={'row-reverse'} spacing={35} mr={40}>
            <Typography fontSize={'17px'}>Description</Typography>
            <Typography fontSize={'17px'}>CTC</Typography>
            </Stack>
          <Grid container marginTop="10px">
            <Grid xs={2} margin="10px" textAlign="center" verticalAlign="middle">
              <Typography marginTop="15px" fontSize="17px">
                BTech
              </Typography>
            </Grid>
            <Grid xs={3} margin="10px">
              <TextField variant="outlined" label="Text" fullWidth></TextField>
            </Grid>
            <Grid xs={6} margin="10px">
              <TextField variant="outlined" label="Text" fullWidth></TextField>
            </Grid>
          </Grid>
  
          <Grid container marginTop="10px">
            <Grid xs={2} margin="10px" textAlign="center">
              <Typography marginTop="15px" fontSize="17px">
                MTech
              </Typography>
            </Grid>
            <Grid xs={3} margin="10px">
              <TextField variant="outlined" label="Text" fullWidth></TextField>
            </Grid>
            <Grid xs={6} margin="10px">
              <TextField variant="outlined" label="Text" fullWidth></TextField>
            </Grid>
            <Box height={123}></Box> 
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
         </Grid>
          </Stack>
          <Divider/>
          <br/>
          <ButtonGroup2 onEC={handlebutton} onJD={handlebutton1} onPD={handlebutton2} onSP={handlebutton3}/>
      </Stack>
      </>
    );
  }
  
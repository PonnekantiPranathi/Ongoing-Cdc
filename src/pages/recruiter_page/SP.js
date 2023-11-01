import {Typography,TextField,IconButton,Box,Stack,Grid,Button,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio,Checkbox,FormGroup,MenuItem,Divider, } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from '@mui/icons-material/Clear';
import ButtonGroup3 from '../../global-components/ButtonGroup3';
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

export default function SelectionProcess({onclose,onButton,onButton1,onButton2,onButton3}) {
  const classes = useStyles();
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
  return (
    <>
      {/* <Box
        borderRadius="10px"
        border="2px solid gray"
        width="920px"
        height="max-content"
        paddingTop='10px'
        paddingLeft='20px'
        paddingBottom='20px'
        paddingRight='30px'
        marginLeft='211px'
        marginTop='62px'
        sx={{
          backgroundColor:"#F0F4FE"
        }}
      > */}
              <Stack direction={'column'} mt={{md:'6.73vh', sm:'22.81vh'}}ml={{md:'14.4vw',sm:'5.81vw'}} height={{md:'86.53vh',sm:'76.53vh'}} width={{md:'71.875vw',sm:'85.5vw'}}  className={classes.formContainer}  elevation={10}>
        <Stack direction={'row'} mb={2} justifyContent={'space-between'}><Typography ><b>JOB ROLE 1</b></Typography><IconButton aria-label="delete"  onClick={handleBUTTON} ><ClearIcon fontSize='large'/></IconButton></Stack>
        <Grid item  style={{fontFamily:'poppins',fontSize:'32px',color:'#1E53D7',marginTop:'-25px',marginBottom:'10px'}}>Selection Process</Grid>
              <Stack height={{md:'53.24vh',sm:'64.24vh'}}
      sx={{overflow: 'scroll',WebkitOverflowScrolling: 'touch', 
        '&::-webkit-scrollbar': {width: '12px',height:'1px'},
        '&::-webkit-scrollbar-thumb': {backgroundColor: '#1E53D740', borderRadius: '6px', width:'2px'},}}>
        <Grid container>
            <Box width="733px"></Box>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="15px">
            <Typography sx={{ fontSize: "17px" }}>
              Application Deadline
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="15px">
            <Typography sx={{ fontSize: "17px" }}>PPT:</Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl marginTop="15px">
              <RadioGroup name="yes/no" aria-labelledby="id1" row>
                <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
                <FormControlLabel control={<Radio />} label="No" value="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="15px">
            <Typography sx={{ fontSize: "17px" }}>
              Resume Shortlisting:
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl marginTop="15px">
              <RadioGroup name="yes/no" aria-labelledby="id1" row>
                <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
                <FormControlLabel control={<Radio />} label="No" value="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="8px">
            <Typography sx={{ fontSize: "17px" }}>Written Test</Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <RadioGroup name="yes/no" aria-labelledby="id1" row>
                <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
                <FormControlLabel control={<Radio />} label="No" value="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="8px">
            <Typography sx={{ fontSize: "17px" }}>Test Type:</Typography>
          </Grid>
          <Grid item xs>
            <FormControl>
              <FormGroup row name="Checkbox-group" aria-labelledby="id2">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Technical"
                  value="Technical"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Aptitude"
                  value="Aptitude"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Case Study"
                  value="Case Study"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Others"
                  value="Others"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="8px">
            <Typography sx={{ fontSize: "17px" }}>Test Description</Typography>
          </Grid>
          <Grid item>
            <TextField variant="outlined" label="Text"></TextField>
          </Grid>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="8px">
            <Typography sx={{ fontSize: "17px" }}>Group Discussion</Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <RadioGroup name="yes/no" aria-labelledby="id1" row>
                <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
                <FormControlLabel control={<Radio />} label="No" value="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="8px">
            <Typography sx={{ fontSize: "17px" }}>Interview</Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <RadioGroup name="yes/no" aria-labelledby="id1" row>
                <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
                <FormControlLabel control={<Radio />} label="No" value="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={4} marginTop="15px">
            <Typography sx={{ fontSize: "17px" }}>
              Expected Number Of Rounds:
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              select
              fullWidth
              
            >
              <MenuItem value='1'>1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="8px">
            <Typography sx={{ fontSize: "17px" }}>Interview Type:</Typography>
          </Grid>
          <Grid item xs>
            <FormControl>
              <FormGroup row name="Checkbox-group" aria-labelledby="id2">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Technical"
                  value="Technical"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Aptitude"
                  value="Aptitude"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="HR"
                  value="HR"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Others"
                  value="Others"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>


        <Grid container marginTop="10px">
          <Grid item xs={3} marginTop="8px">
            <Typography sx={{ fontSize: "17px" }}>Interview Description</Typography>
          </Grid>
          <Grid item>
            <TextField variant="outlined" label="Text"></TextField>
          </Grid>
        <Box height={143}></Box> 
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
         </Grid><br/><br/>
        </Stack>
        <Divider/>
          <br/>
          <ButtonGroup3 onEC={handlebutton} onJD={handlebutton1} onPD={handlebutton2} onSP={handlebutton3}/>
        </Stack>
    </>
  );
}

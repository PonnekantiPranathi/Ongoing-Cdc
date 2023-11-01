import React,{useState} from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import { Typography, Link, TextField, Divider, Button } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';import { Style } from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Modal } from '@mui/material';import JD from '../recruiter_page/JD'
import EC from '../recruiter_page/EC'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SP from "../recruiter_page/SP";
import PD from '../recruiter_page/PD'


function CompanyProfile() {
  const theme = useTheme();
  let height;
  const Desk = useMediaQuery(theme.breakpoints.down('md'));
  const Tab = useMediaQuery(theme.breakpoints.down('sm'));
  if (Tab){
    height = '23vw';
  }else if(Desk){
    height = '7vw';
  }
  
const inputStyle ={height:'3.39vh',width:{height},borderRadius:'11px',border:'2px',alignItems:'center'}
const inputStyle1 ={height:'4.3vh', width:{height},border:'2px',alignItems:'center',}
    const [value, setValue] = useState(null);
    const [open,setopen] = useState(false);
    const [open1,setopen1] = useState(false);
    const [open2,setopen2] = useState(false);
    const [open3,setopen3] = useState(false);
    
    const handleclick = () =>{
        setopen(true);
        setopen1(false);
        setopen2(false);
        setopen3(false);
    }
    const handleclose = () =>{
        setopen(false);
        setopen1(false);
        setopen2(false);
        setopen3(false);
        
    }
    const increaseValue = () => {
      setValue(value + 1);
  };
    const decreaseValue = () => {
      setValue(value - 1);
    };
    const handleOpen = () =>{
      setopen(false);
      setopen2(false);
      setopen3(false);
      setopen1(true);
    }
    const handlePD = () =>{
      setopen2(true);
      setopen1(false);
      setopen(false);
      setopen3(false);

    }
    const handleSP = () =>{
      setopen3(true);
      setopen1(false);
      setopen2(false);
      setopen(false);
    }
  return (<>
    <Modal open={open} onClose={onclose}>
    <JD onclose={handleclose}  onButton={handleOpen} onButton1={handleclick} onButton2={handlePD} onButton3={handleSP}/>
    </Modal>
    <Modal open={open1} onClose={onclose}>
    <EC onclose={handleclose}  onButton={handleOpen} onButton1={handleclick} onButton2={handlePD} onButton3={handleSP}/>
    </Modal>
    <Modal open={open2} onClose={onclose}>
    <PD onclose={handleclose}  onButton={handleOpen} onButton1={handleclick} onButton2={handlePD} onButton3={handleSP}/>
    </Modal>
    <Modal open={open3} onClose={onclose}>
    <SP onclose={handleclose}  onButton={handleOpen} onButton1={handleclick} onButton2={handlePD} onButton3={handleSP}/>
    </Modal>
    <Grid item xs={12} md={8} sm={12} width={{md:'82.5vw'}} justifyContent={"center"}alignItems={"center"}position={"absolute"}left={{ md: '10vw', sm: '4.37vw',xs:'3.75vw'}} marginTop={{ md: '-93vh', sm:'12.8vh',xs:'10.8vh' }}>

      <Stack direction={"column"} justifyContent={"left"} fontFamily={"Poppins"} height={{ md: "80vh" }} >


        <Link underline="hover" color={"blue"} sx={{ cursor: "pointer" }}>Profile</Link>

        <Typography variant="h4" fontWeight={400} fontSize={{ xs: 16,sm:24, md: 32 }} color={"black"}>Company Details</Typography>

        <Typography variant="h4" fontWeight={500}fontSize={{ xs: 20, md: 20 }}color={"blue"}>Company Name</Typography>

        <Typography variant="h4" fontWeight={400}  fontSize={{ xs: 16, md: 16 }} color={"black"}>www.website.com</Typography>

        <Typography variant="p" fontWeight={400} width={{md:'79.2vw',sm:'69.2vw',xs:'90vw'}} mb={4}fontSize={{ xs:14, md: 16 }} color={"black"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          condimentum vehicula ex, sed condimentum metus posuere egestas.
          Maecenas maximus elit nunc. Aenean faucibus lorem id aliquam aliquet.
          Morbi vel massa erat. Proin nunc sem, malesuada quis bibendum et,
          congue at mauris.
        </Typography>

        <Stack direction={'row'} alignItems={'center'} spacing={2}>

        <Box component="span">Category:</Box>

        <TextField size="small"  placeholder="Text" InputProps={{style: inputStyle,}}/></Stack>

        <Stack direction={'row'} alignItems={'center'} spacing={4} mt={1} mb={3}>

        <Box component="span">Sector:</Box>

        <TextField  placeholder="Text" InputProps={{style: inputStyle,}}/></Stack>

        <Divider />

        <Typography variant="h4" mt={2} fontWeight={400} fontSize={{ xs: 16, md: 32 }} color={"black"}>Job Application Form</Typography>

        <Stack direction={'row'} alignItems={'center'} spacing={1} mt={1} mb={3}>

        <Box component="span">Number of Job roles:</Box>

        <Button onClick={decreaseValue} sx={{padding:'0px'}}><RemoveCircleOutlineIcon/></Button>

        <TextField size="small"  value={value} InputProps={{style: inputStyle1,}}/>

        <Button onClick={increaseValue} sx={{padding:'0px',paddingLeft:'0px'}} ><AddCircleOutlineIcon/></Button>

        </Stack>

        <Stack direction={"row"} spacing={4}>

        <Button variant="contained"  sx={{borderRadius:'11px',height:'3.84vh',width:'9.21vw'}} onClick={handleclick}><Typography fontSize={{md:'0.95vw',sm:'0.75vw',xs:'0.7vw'}}>Add Role 1</Typography></Button>

        <Button variant="contained" sx={{borderRadius:'11px',height:'3.84vh',width:'9.21vw'}}><Typography fontSize={{md:'0.95vw',sm:'0.75vw',xs:'0.7vw'}}>Add Role 1</Typography></Button>

        </Stack>
        </Stack>
    </Grid>  </>
  );
}

export default CompanyProfile;

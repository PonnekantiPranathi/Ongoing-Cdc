import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import { Typography, Link } from '@mui/material';
import NavTabs from '../../../global-components/NavTabs';
import Textbox from '../../../global-components/Textbox';
import Password from '../../../global-components/Password'
import ClickButton from '../../../global-components/ClickButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function RightLogin() {
    const theme = useTheme();
    const screenLessMedium = useMediaQuery(theme.breakpoints.down('md'));
    const screenLessSmall = useMediaQuery(theme.breakpoints.down('sm'));
    
    let widthChange='0';
    if(screenLessSmall){
        widthChange='88%';
    }
    else if(screenLessMedium){
        widthChange='75%';
    }
    else{
        widthChange='55%';
    }

    const fsizeChange = screenLessMedium?'0.7rem':'0.85rem';
  return (
    <Grid item xs={12} justifyContent={'center'} alignItems={'center'} position={'absolute'} sx={{backgroundColor:'white'}} width={{xs:'75%', md:'65%'}} right={{xs:'12.5vw',md:0}} bottom={{xs:12, md:0}} borderRadius={{md:'50px 0 0 50px', xs:'50px'}}  >

            <Stack direction={'column'} justifyContent={"center"} alignItems={'center'} fontFamily={'Poppins'} height={{md:'100vh'}} >

                <Typography variant='h3' fontWeight={550} mb={2} mt={{xs:2}} fontSize={{xs:35}}>SIGN IN</Typography>

                <Typography variant='h4' fontWeight={100} mb={5}  fontSize={{xs:25}}>IIT Goa CDC Portal</Typography>

                
                
                <NavTabs width= {widthChange} fsize={fsizeChange}/>

                <Box height={50}></Box>
                <Textbox label='Username'/>
                <Password label='Password'/>
                <ClickButton height='65px' width='280px' value='SIGN IN' fs='1.2rem' margin='30px 0'/>
                <Link underline='hover' sx={{color:'red', cursor:'pointer'}}  mb={2}>Forgot Password</Link>

                <Box display={'flex'} flexDirection={'row'} >
                    <Typography variant='p'>New User?</Typography>
                    <Link underline='hover' sx={{cursor:'pointer'}} mb={{xs:3}}>Apply Now!</Link>
                </Box>


            </Stack>
            
      </Grid>
  );
}

export default RightLogin;

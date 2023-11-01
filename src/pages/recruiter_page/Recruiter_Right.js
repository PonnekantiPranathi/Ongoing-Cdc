import * as React from 'react';
import MyTimeline from '../../global-components/Timeline'
import { Box,Stack } from '@mui/material';

export default function Recruiter() {
  return (<><Stack direction={'column'} mt={-60}>
        <Box component={'span'}style={{position:'relative',marginLeft:'32rem',width:'max-content',marginTop:'',fontFamily:'poppins',fontSize:'3rem'}}>Welcome</Box><br/>
        <Box component={'span'} mt={-4}style={{position:'relative',marginLeft:'27.8rem',width:'max-content',fontFamily:'poppins',fontSize:'3rem',}}>Company Name</Box></Stack>
        <Stack
          className='timeline-container' 
          style={{position:'absolute',left:'60rem',top:'0.05em',}}
        >
        <MyTimeline/>
        </Stack>
        </>
  );
}


import {Timeline} from '@mui/lab';
import MytimelineItem from './TimelineItem.js';
import {Box} from '@mui/material';
import Progressor from './Progressor.js'

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  ForkLeft:'2rem',
  border: 2,
  width: '30rem',
  height:'min-content',
  
};

export default function Mytimeline(props) {
  return (
    <Box sx={{ ...commonStyles,borderRadius:'22px',backgroundColor:'Highlight',textAlign:'center',marginTop:'3rem',justifyContent: 'center',height:'40rem'}}>
        <br/>
        <div style={{color:'white',fontSize:'2rem'}}>Timeline</div>
        <div style={{fontSize:'2rem',color:'white'}}>20% complete</div>
        <Progressor/>
        <br/>
    <Timeline position="right" sx={{position:'center',height:''}} >
      <MytimelineItem content = "Complete your profile" color="blue"/>
      <MytimelineItem content = "Profile verification Status"/>      
      <MytimelineItem content = "Students Applications Submitted"/>
      <MytimelineItem content = "PPT - DD/MM/YYYY"/>
      <MytimelineItem content = "Test - DD/MM/YYYY"/>
      <MytimelineItem content = "Interview - DD/MM/YYYY"/>
      <MytimelineItem content = "Result Announcement"/>
    </Timeline> 
    </Box> 
  );
}
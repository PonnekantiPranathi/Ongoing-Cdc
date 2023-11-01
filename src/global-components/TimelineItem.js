import * as React from 'react';
import {TimelineItem} from '@mui/lab';
import {TimelineSeparator} from '@mui/lab';
import {TimelineConnector} from '@mui/lab';
import {TimelineContent} from '@mui/lab';
import {TimelineDot} from '@mui/lab';
import { styled } from '@mui/material/styles';

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
    width: '1rem',  
    height: '1rem', 
    marginBottom:'0.1px',
    marginTop:'-0.1px',
    marginLeft:'-253px',
  }));


  const StyledTimelineContent = styled(TimelineContent)(({theme}) => ({
    width:'8rem',
    marginBlock:'-8px',
    marginLeft:'-230px',
    color:'white'
      }));

    const inputStyle = {height:'5.76vh', width:'28.59vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };
export default function MytimelineItem(props){
  const StyledTimelineConnector = styled(TimelineConnector)(({theme}) => ({
    width:'8px',
    marginLeft:'-490px',
    backgroundColor:'aliceblue'
      }));
    let name = "Result Announcement";
    let t = props.content;
    let J = true;
    if(t === name){
      J = false;
    }

    return(
        <div>
        <TimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot />
         {J ? <StyledTimelineConnector InputProps={{style: inputStyle,}} /> : null}
        </TimelineSeparator>
        <StyledTimelineContent >{props.content}</StyledTimelineContent>
      </TimelineItem></div>
    );
}
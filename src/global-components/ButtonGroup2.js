import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Stack } from '@mui/material';


const useStyles = makeStyles(theme => ({
    pageButton: {
      marginTop: theme.spacing(1),
      borderSpacing:'4',
      borderRadius:'10px',
      color:'#FFFFFF'
    },
    page1Button: {
      marginTop: theme.spacing(1),
      borderSpacing:'4',
      borderRadius:'10px',
      color:'blue'
    },
  }));

export default function ButtonGroup2({onEC,onJD,onSP,onPD}){

  const handleJD = () =>{
    onJD(true);
  }
  const handleEC = () =>{  
  onEC(true);}
  const handlePD = () =>{  
  onPD(true);}
  const handleSP = () =>{  
  onSP(true);}
  
  const classes = useStyles();
    return(
        <Stack spacing={4} direction={'row'} marginLeft={15}>
        <Button variant="contained" onClick={handleJD}  color="primary" className={classes.pageButton}>Job Description</Button> 
        <Button variant="contained"  onClick={handleEC} color="primary" className={classes.pageButton}>Eligibility Criteria</Button> 
        <Button variant="outlined"  onClick={handlePD} color="primary" className={classes.page1Button}>Package Details</Button> 
        <Button variant="contained"  onClick={handleSP} color="primary" className={classes.pageButton}>Selection Process</Button></Stack> 
        );}
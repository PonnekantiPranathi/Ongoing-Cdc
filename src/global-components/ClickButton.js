import React from 'react';
import {Button}  from '@mui/material';
function ClickButton(props) {
  return (
    <div>
      <Button
      variant="contained"
      sx={{
        color: "FFFFFF",
        bgcolor: "#1E53D7",
        fontSize:props.fs,
        height: props.height,
        width: props.width,
        borderRadius: "20px",
        margin:props.margin
      }}
    >
      {props.value}
    </Button>

    </div>
  );
}

export default ClickButton;

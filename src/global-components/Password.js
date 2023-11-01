import React from 'react';
import TextField from '@mui/material/TextField';

function Textbox() {
  return (
    <div>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"

          sx={{
            width:285,
            margin:'7.5px'
          }}
        />
      
    </div>
  );
}

export default Textbox;

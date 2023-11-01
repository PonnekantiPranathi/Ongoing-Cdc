import React, { useState } from 'react';
import { CssBaseline, Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import  School  from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Profile from "./Profile";
import { Link as RouterLink } from 'react-router-dom';
import {Hidden, Link} from '@mui/material';
import { Stack } from '@mui/material';

const LeftSidebar = ({onButton,onbut}) => {
  const [collapsed, setCollapsed] = useState(false);
  const handlebutton = () =>
  {
    onButton(true);
    setCollapsed(true);
  }
  const handleButton = () =>
  {
    onbut(true);
    setCollapsed(false);
  }
  return (
    <>
      <CssBaseline />
      <Hidden mdDown>
          <Profile/>
          <Box width={20}  component={'span'}          sx={{
            width: collapsed ? '5%' : '15%', 
            borderRight: '1px solid black', 
            height: '100vh', 
            backgroundColor:'darkblue',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            transition: 'width 0.3s',
            boxSizing: 'border-box',
            fontFamily: 'poppins',
            marginTop:'-28px'  
          }}>
            <Box marginTop={3}>
            {collapsed ? (
              <Button onClick={handleButton} style={{ justifyContent: 'center' }}>
                <School fontSize="large" />
              </Button>
            ) : (
              <Button 
                onClick={() => setCollapsed(true)} 
                style={{ justifyContent: 'left', color: 'white', fontSize: '1.2em', marginBottom: '4.5em', marginTop: '1em', marginLeft: '1.3em', fontFamily: 'poppins' }} // Changed font here
              >
                RECRUITER
              </Button>
            )}

            <List>
            {[
                { text: 'Profile', icon: <PersonIcon />,  },
                { text: 'Application', icon: <AssignmentIcon /> },
                { text: 'POC', icon: <ContactPhoneIcon /> },
                { text: 'Schedule', icon: <ScheduleIcon /> }
            ].map((item) => (
                <ListItem button key={item.text} onClick={handlebutton}>
                {item.icon}
                {!collapsed && 
                    <ListItemText 
                    primaryTypographyProps={{ 
                        fontFamily: 'Georgia',  
                        marginLeft: 2
                    }} 
                    primary={item.text} 
                    />}
                </ListItem>
            ))}
            </List>
          </Box>

          {!collapsed && (
            <Box component={'span'}sx={{ marginTop: '40vh', display: 'flex', alignItems: 'center' }} >
              <School fontSize="large" />
              
              <Box component={'span'} sx={{ marginLeft: 2 }}>
                <Typography variant="body2" sx={{ fontFamily: 'Georgia', lineHeight: 1, fontWeight: 'bold', fontSize: 'body2.fontSize + 1' }}>  
                  IIT GOA
                </Typography>
                <Typography variant="caption" sx={{ fontFamily: 'Georgia', fontSize: 'caption.fontSize + 2'}}>  
                  Career Development Cell
                </Typography>
              </Box>
            </Box>
          )}
          {collapsed && (<Box component={'span'}sx={{ marginTop: '65.5vh', display: 'flex', alignItems: 'center' }} ></Box>)}
        </Box>
        {/* </Stack> */}
        </Hidden>
        <Hidden smDown> 
        <Box 
          sx={{
            flex: 1, 
            backgroundColor: 'white'
          }}
        >
        </Box>
        </Hidden>
      
    </>
  );
}

export default LeftSidebar;

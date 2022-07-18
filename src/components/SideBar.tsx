import { ModeNight,} from "@mui/icons-material";
  import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export interface DarkModeProps {
  toggleDark:'light' | 'dark'
  settoggleDark: ((toggleDark:'light' | 'dark')=> void)
}

const Sidebar:FunctionComponent<DarkModeProps>= ({ toggleDark, settoggleDark }) => {

  const [sideBar,setSideBar]=useState([
    'Categories',
    'Groups',
    'UpcomingDeadline',
    'Settings'
  ])

  const handleModeChange = () => {
   settoggleDark(toggleDark === "light" ? "dark" : "light");
   window.localStorage.setItem('theme', toggleDark === 'light' ? 'dark' : 'light')
  };

  const renderSideBar = (): JSX.Element[] => {
    return sideBar.map((sideBar,index) => {
        return (
          <Link to={`/${sideBar}`} style={{ textDecoration: 'none',color: toggleDark === 'light' ? 'black' : 'white' }}>
          <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={sideBar} />
                </ListItemButton>
              </ListItem>
        </Link>
        )
    })
}


    return (
      <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
          {renderSideBar()}
          </List>
          <Divider />
          <List>
           
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch 
            onChange={handleModeChange}
            name="toggleDark"
            color="default"/>
            </ListItemButton>
          </ListItem>
          
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
      
    );
  };
  
  export default Sidebar;
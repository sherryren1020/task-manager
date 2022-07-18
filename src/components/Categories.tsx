import React, { useState, useEffect, FunctionComponent } from 'react';
import database from '../data.json'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";

import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import AppBar from './AppBar';
import Card from '@mui/material/Card';

enum Status {
    finished = "finished",
    inProgress = "inProgress",
    canceled = "canceled"
}

interface Data {
    id: number,
    title: string,
    category: string,
    status: Status,
    timeStart?: string,
    label: string[]
}

interface CategoriesProps {
    
}
 
const Categories: FunctionComponent<CategoriesProps> = () => {
    let designs = 0
    let systems = 0
    database.forEach((data)=>{
        if(data.category == 'Designs'){
            designs++
        }else if(data.category == 'Systems'){
            systems++
        }
    })

    return ( 
        <Container>
             <AppBar />

            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <Link to={`/ `} >
                 <ArrowBackIcon /></Link> Project List
                </Typography>
                <Card sx={{ minWidth: 275 }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Systems" secondary={`${systems} project(s)`}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Designs" secondary={`${designs} project(s)`} />
      </ListItem>
     
    </List>
    </Card>
    </Container>
     );
}
 
export default Categories;

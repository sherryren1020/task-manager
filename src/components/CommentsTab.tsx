
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'

const ariaLabel = { 'aria-label': 'description' };

type Message = string

export default function CommentsTab() {
  const [comments, setComments] = useState<Array<Message>>([
    'Please provide a detail doc for this projects',
    'Client review',
    'Please mark this one canceled'
  ])

  const [subComments, setSubcomments] = useState([''])

  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    console.log(target.outerText)
    setSubcomments(subComments => [...subComments, target.outerText])

  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    let input = document.querySelector('#name') as HTMLInputElement;
    if (input.value.length !== 0) {
      setComments(oldArray => [...oldArray, input.value])
    }
  };

  console.log(comments)

  const renderMainComments = (): JSX.Element[] => {
    return comments.map((comment, index) => {
      return (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={comment}
              secondary={renderSubComments()}
            />
          </ListItem>

          <Button variant="contained" onClick={handleClick}>OK, I will fix it</Button>
          <Button variant="contained" onClick={handleClick} sx={{ backgroundColor: 'pink', marginLeft: '10px' }}>Thanks!</Button>
        </>
      )

    })
  }

  const renderSubComments = (): JSX.Element[] => {
    return subComments.map((subComment, index) => {
      return(
        <>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          From Ann {/* Add name after login */}
        </Typography>
        {subComment}
      </>
      )
    })
  }


  const renderComments = () => {
    // return comments.map((comment, index) => {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Message" id="name" />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    )
    // })
  }


  return (
    <Paper>
      {renderComments()}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {renderMainComments()}
      </List>

    </Paper>

  );

}
import * as React from 'react';
import { Link } from "react-router-dom";
import { Props } from "../App";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Grid, Paper, Typography } from '@mui/material';


interface ProjectListProps {
  projects: Props["project"]
  toggleDark?: "light" | "dark"
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, toggleDark }) => {
  console.log(toggleDark)

  const renderProject = (): JSX.Element[] => {
    return projects.map((project, index) => {
      return (
        <Link to={`/project/${project.id}`} key={index} style={{ textDecoration: 'none', color: toggleDark === 'light' ? 'black' : 'white' }}>
          <ListItem>
            <ListItemButton>
              <Typography variant="h6" component="h2" >{project.title}</Typography>
              <Typography variant="subtitle1" component="p" marginLeft={3}>{project.status} </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
      )
    })
  }
  return (
    <Paper>
    <Grid container justifyContent="center">
      <List>
        {renderProject()}
      </List>
    </Grid>
    </Paper>
  );
}

export default ProjectList;

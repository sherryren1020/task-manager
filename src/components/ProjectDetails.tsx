import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Container from "@mui/material/Container"
import { FunctionComponent, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import database from "../data.json"
import * as React from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import GroupIcon from "@mui/icons-material/Group"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import AvatarGroup from "@mui/material/AvatarGroup"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import CommentsTab from "./CommentsTab"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import AppBar from "./AppBar"
import TextField from "@mui/material/TextField"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import IconButton from "@mui/material/IconButton"
import SideBar, { DarkModeProps } from "./SideBar"

enum Status {
  finished = "finished",
  inProgress = "inProgress",
  canceled = "canceled",
}
interface Props extends Partial<DarkModeProps> {
  id?: number
  title?: string
  category?: string
  status?: Status
  timeStart?: string
  label?: string[]
}

const ProjectDetails: FunctionComponent<Props> = ({ toggleDark }) => {
  const params = useParams()
  const paramsId = parseInt(params.id!)
  const project: Props = {
    id: paramsId,
    title: database[paramsId].title,
    category: database[paramsId].category,
    timeStart: database[paramsId].timeStart,
    label: database[paramsId].label,
  }
  const [value, setValue] = useState<string>("1")
  const [label, setLabel] = useState<string[]>([])
  const themeName = window.localStorage?.getItem("theme")
  const mode = themeName?.replace(/['"]+/g, "")
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = () => {
    setOpen(false)
    let input = document.querySelector("#name") as HTMLInputElement
    setLabel((oldArray) => [...oldArray, input.value])
    console.log(input?.value)
  }

  return (
    // <ThemeProvider >
    <Paper>
      <Container>
        <AppBar />
        {/* <SideBar /> */}
        <Box>
          <Grid item xs={8} marginY={2}>
            <Paper>
              <Box marginTop={2} padding={2}>
                <Typography variant="h6" component="h2">
                  <Link to={`/ `}>
                    <ArrowBackIcon />
                  </Link>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography variant="h6" component="p">
                    {database[paramsId].category}
                  </Typography>
                  {database[paramsId].title}
                </Typography>
              </Box>
              <Box marginTop={2} padding={2}>
                <Typography variant="h6" component="h2">
                  <AttachFileIcon /> Status
                  <Button
                    startIcon={<AccessTimeIcon />}
                    variant="contained"
                    sx={{
                      borderRadius: "50px",
                      marginLeft: "20px",
                    }}
                  >
                    {database[paramsId].status}
                  </Button>
                </Typography>
              </Box>
              <Box marginTop={2} padding={2}>
                <Typography variant="h6" component="h2">
                  <AccessTimeIcon /> Timeline
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "50px",
                      marginLeft: "20px",
                    }}
                  >
                    <TextField
                      id="date"
                      type="date"
                      defaultValue={database[paramsId].timeStart}
                      sx={{ width: 220, border: 0 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Button>
                </Typography>
              </Box>
              <Box marginTop={2} padding={2}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ position: "relative", width: "230px" }}
                >
                  <GroupIcon /> Assignee
                  <AvatarGroup
                    max={2}
                    sx={{ position: "relative", float: "right" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </AvatarGroup>
                </Typography>
              </Box>
              <Box marginTop={2} padding={2}>
                <Typography variant="h6" component="h2">
                  <BookmarkBorderIcon /> Label
                  {project?.label &&
                    project?.label?.map((data) => {
                      return (
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "50px",
                            marginLeft: "20px",
                          }}
                        >
                          {data}
                        </Button>
                      )
                    })}
                  {label.length !== 0 &&
                    label.map((label) => {
                      return (
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "50px",
                            marginLeft: "20px",
                          }}
                        >
                          {label}
                        </Button>
                      )
                    })}
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={handleClickOpen}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Enter a label </DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Text here"
                        type="email"
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                  </Dialog>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Box>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Comments" value="1" />
                <Tab label="Descriptions" value="2" />
                <Tab label="Settings" value="3" />
              </TabList>
            </Box>
            {/* For item one, should add a components to implement the leave message function */}
            <TabPanel value="1">
              <CommentsTab />
            </TabPanel>
            <TabPanel value="2">Descriptions</TabPanel>
            <TabPanel value="3">Settings</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </Paper>
  )
}

export default ProjectDetails

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListIcon from "@mui/icons-material/List"
import { Link } from "react-router-dom"

import { userContext } from "../userContext"
import { UserData } from "./SignIn"

interface Props {
  name?: string
}

export default function ButtonAppBar() {
  const [user] = React.useState()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Button
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
            sx={{ height: "25px" }}
            startIcon={<ListIcon />}
          ></Button>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to={`/`}>Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={`/categories`}>Category</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <userContext.Consumer>
            {({ user }) => {
              if (user !== undefined && Object.keys(user).length > 0) {
                console.log(user)
                return (
                  <div>
                    <span>Ann</span>
                  </div>
                )
              } else {
                return (
                  <Link
                    to={"/signin"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button color="inherit">Login</Button>
                  </Link>
                )
              }
            }}
          </userContext.Consumer>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

import React, { FunctionComponent, useState } from "react"
import AppBar from "./AppBar"
import ProjectsList from "./ProjectList"
import Sidebar, { DarkModeProps } from "./SideBar"
import { Paper } from "@mui/material"
interface IProjectsProps extends DarkModeProps {
  projects: {
    id: number
    title: string
    category: string
    status: string
    timeStart: string
    label: string[]
    message?: string[]
  }[]
}

const Home: FunctionComponent<IProjectsProps> = ({
  projects,
  toggleDark,
  settoggleDark,
}) => {
  return (
    <Paper>
      <AppBar />
      <Sidebar toggleDark={toggleDark} settoggleDark={settoggleDark} />
      <ProjectsList projects={projects} toggleDark={toggleDark} />
    </Paper>
  )
}

export default Home

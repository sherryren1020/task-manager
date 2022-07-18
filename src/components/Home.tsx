import React, { FunctionComponent, Suspense } from "react"
import AppBar from "./AppBar"
import Sidebar, { DarkModeProps } from "./SideBar"
import { Paper } from "@mui/material"

const ProjectsList = React.lazy(() => import('./ProjectList'));

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
      <Suspense fallback={<div>Loading Projects</div>}>
        <ProjectsList projects={projects} toggleDark={toggleDark} />
      </Suspense>
    </Paper>
  )
}

export default Home

import React, { FunctionComponent, useState } from 'react';
import Home from './components/Home';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import ProjectsList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import Categories from './components/Categories';
import database from './data.json'
import { DarkModeProps } from './components/SideBar';
import SignIn from './components/SignIn';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { userContext } from './userContext';


export interface Props extends DarkModeProps {
  project:{
    id:number,
    title:string,
    category:string,
    status:string,
    timeStart:string,
    label:string[],
    message?:string[],
  }[],
  userState: {
    user: {
      name?: string
      avatar?: string
      id?: number
      emai?: string
    }
  }
  }
  function App() {
  const [projects, setProjects] = useState<Props["project"]>(database)

  const [toggleDark, settoggleDark] = useState<'light' | 'dark'>('light');
  const myTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: toggleDark 
        },
      }),
    [toggleDark],
  );

  const [user, setUser] = useState<Props["userState"]>({user: {}})
  return (
    <ThemeProvider theme={myTheme}>
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home projects={projects} toggleDark={toggleDark}
               settoggleDark={settoggleDark}/>} />
          <Route path="project">
                      <Route index element={<ProjectsList projects={projects} toggleDark={toggleDark}
               />} />
                      <Route path=":id" element={<ProjectDetails toggleDark={toggleDark}
               settoggleDark={settoggleDark}/>} />
                  </Route>
          <Route path="categories" element={<Categories />} />
          <Route path="signin" element={<SignIn setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
    </ThemeProvider>
   );
}
 
export default App;

import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultHOC from './components/HOC/Default.HOC'
import Feature from './components/Pages/Feature'
import Home from './components/Pages/Home'
import Team from './components/Team'
import Blog from './components/Pages/Blog'
import NotFound from './components/NotFound'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect, useState } from 'react'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<DefaultHOC/>,
  
    children : [
      { index: true, element: <Home/> },
      { path: "Home", element: <Home/> },
      { path: "Feature", element: <Feature/> },
      { path: "Team", element: <Team/> },
      { path: "Blog", element: <Blog/> },
      { path: "Login", element: <Login/> },
      { path: "SignUp", element: <SignUp/> },
      { path: "*", element: <NotFound/> }

    ]}
])

 const App = () => {
   const [themeMode, setthemeMode] = useState("light");

   const lightTheme = () => {
    setthemeMode("light");
   }

   const darkTheme = () => {
    setthemeMode("dark");
   }


   useEffect(()=>{
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
   },[themeMode])

  return (
  <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
  <RouterProvider router={appRouter}/>
  </ThemeProvider>
  )
}

export default App
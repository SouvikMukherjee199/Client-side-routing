
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
  return <RouterProvider router={appRouter}/>
}

export default App
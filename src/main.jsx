import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import App from './App'
import Landing from './screens/Landing/Landing'
import CourseDetail from './screens/CourseDetail/CourseDetail'
import Courses from './screens/Courses/Courses'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import Root from './components/Root/Root'
import NotFound from './components/NotFound/NotFound'
import Error from './components/Error/Error'
const router = createBrowserRouter([
    {
      path:'/',
      element: <Root />,
      children: [
        {
          path:'/',
          element: <App />,
          errorElement:<Error/> 
        },
        {
          path:'/landing',
          element: <Landing />,
          errorElement: <Error/> ,
        },
        {
          path:'/course-detail',
          element: <CourseDetail />,
          errorElement: <Error/> ,
        },
        {
          path:'/courses',
          element:<Courses />,
          errorElement: <Error/> ,
        }
      ]
    },
    {
      path: '/login',
      element:<Login />,
      errorElement: <Error/> ,
    },
    {
      path:'/register',
      element: <Register />,
      errorElement: <Error/> ,
    },
    {
      path: "*",
      element: <NotFound />,
      errorElement: <Error/> ,
    }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}  />
  </StrictMode>,
)

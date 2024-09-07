import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Whyjoin from './components/WhyJoin/Whyjoin.jsx'
import Trainig from './components/Training/Trainig.jsx'



const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='WhyJoin' element={<Whyjoin/>} />
      <Route path='Training' element={<Trainig/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

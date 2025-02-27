import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import TypingTemplete from './Components/TypingTemplete.jsx'
import ScoreCard from './Components/ScoreCard.jsx'

const Router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} > 
        <Route path='' element={<TypingTemplete/>} />
        <Route path='/Typing-scoreCard' element={<ScoreCard/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <RouterProvider router={Router}/>
  </>
)

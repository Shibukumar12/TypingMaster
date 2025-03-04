import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import TypingTemplete from './Components/TypingTemplete.jsx'
import ScoreCard from './Components/ScoreCard.jsx'
import { Provider } from 'react-redux'
import store from './Components/Store/Store.jsx'
import About from './Components/About.jsx'

const Router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} > 
        <Route path='' element={<TypingTemplete/>} />
        <Route path='/About-us' element={<About/>} />
        <Route path='/Typing-scoreCard' element={<ScoreCard/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <Provider store={store}>
      <RouterProvider router={Router}/>
      </Provider>
  </>
)

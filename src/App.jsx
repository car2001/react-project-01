import { useState } from 'react'
import './App.css'
import { MyRoutes } from './routers/routes.jsx'

function App() {
  return (
    <header>
      <h1 className='title'>🎬 Peliculas</h1>
      <MyRoutes></MyRoutes>
    </header>
  )
}

export default App

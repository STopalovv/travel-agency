import React from 'react'
import { Route, Routes } from 'react-router'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Packs from './pages/Packs'
import SinglePack from './pages/SinglePack'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/contacts' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/news' element={<News />} />
        <Route path='/packs' element={<Packs />} />
        <Route path='/packs/:id' element={<SinglePack />} />
      </Routes>
    </div>
  )
}

export default App
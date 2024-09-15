import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import User from '../components/User'
import Home from '../components/Home'


function Routing() {

  return (
    <>
        <nav className='p-8 flex gap-10 font-semibold bg-zinc-50 justify-center'>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About</Link>
        </nav>
        <hr />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default Routing
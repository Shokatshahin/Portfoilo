import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='flex justify-between p-10 relative top-[-200px]'>
        <h1 className='text-4xl'>ShokatShahin</h1>
        <ul className='flex gap-5 text-2xl'>
            <a href='#about'>About</a>
            <a href='#exp'>Experience</a>
            <a href='#project'>Projects </a>
            <a href='#blog'>Blogs </a>
            <a href='#contact'>Contact</a>
        </ul>
    </nav>
  )
}

export default Navbar
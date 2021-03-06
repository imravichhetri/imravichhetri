import React from 'react'
// import Link from 'gatsby-plugin-transition-link';
import Link from "gatsby-plugin-transition-link/AniLink";

const navArray = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About Me',
    path: '/about'
  },
  {
    title: 'Resume',
    path: '/resume'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
];

const direction = [
  "up",
  "down",
  "left",
  "right"
];
const Navigation = props => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      {
        navArray.map(nav=> (
          <div key={nav.path} className="uppercase font-helvetica font-bold nav-item my-4 h-full">
            <Link 
              to={nav.path} 
              className="cursor-pointer hover:text-secondary-white" 
              swipe 
              direction={direction[Math.floor(Math.random() * 4)]} 
              duration={1.5}
              >
              {nav.title}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Navigation

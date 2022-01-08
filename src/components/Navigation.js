import { Link } from 'gatsby';
import React from 'react'

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

const Navigation = props => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      {
        navArray.map(nav=> (
          <div key={nav.path} className="uppercase font-helvetica font-bold nav-item my-4">
            <Link to={nav.path} className="cursor-pointer hover:text-secondary-white">
              {nav.title}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Navigation

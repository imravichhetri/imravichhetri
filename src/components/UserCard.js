import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Navigation } from '.'
const UserCard = ({
  children
}) => {
  return (
    <div className="h-full flex flex-row">
      <div className="w-1/4 d-flex flex-col">
        <div className="h-1/3">
          <StaticImage
            src="../images/profile.jpg"
            alt="Profile image"
            placeholder="blurred"
            // width="300"
            className="h-full w-full overflow-hidden d-block"
          />
          </div>
        <div className="h-2/3 bg-secondary-yellow">
          <Navigation/>
        </div>
      </div>
      <div className="flex-auto mx-10">
        {children}
      </div >
    </div>
  )
}

export default UserCard

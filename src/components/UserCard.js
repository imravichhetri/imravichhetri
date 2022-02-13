import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Navigation } from '.'
const UserCard = ({
  children
}) => {
  return (
    <div className="h-full flex flex-row">
      <div className="w-1/4 d-flex flex-col">
        <div className="h-1/3 relative">
          <StaticImage
            src="../images/profile.jpg"
            alt="Profile image"
            placeholder="blurred"
            // width="300"
            className="h-full w-full overflow-hidden d-block usercard-image"
          />
          </div>
        <div className="h-2/3 bg-secondary-yellow relative">
          <Navigation/>
        </div>
      </div>
      <div className="w-3/4 mx-10 overflow-auto">
        {children}
      </div >
    </div>
  )
}

export default UserCard

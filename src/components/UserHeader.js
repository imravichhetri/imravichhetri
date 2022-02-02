import React from 'react'

const UserHeader = ({
  children
}) => {
  return (
    <div className="flex justify-center mt-20 py-5 text-8xl uppercase font-helvetica font-black border-dashed border-2 border-light-blue-500 xl:text-xl xl:mt-10">
      {children}
    </div>
  )
}


export default UserHeader

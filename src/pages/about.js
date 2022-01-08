import React from 'react'
import { UserCard, UserHeader } from '../components';

const About = props => {
  return (
    <UserCard>
      <div>
        <UserHeader>About Me</UserHeader>
        <div className="mt-5 text-center ">
          I'm <b>Ravi Chhetri</b>, Software Engineer
        </div>
      </div>
    </UserCard>
  )
}


export default About;

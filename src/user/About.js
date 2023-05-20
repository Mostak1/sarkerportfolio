import React from 'react'
import { FaAddressBook,FaFacebook } from 'react-icons/fa';

export const About = () => {
  return (
    <div>About <Question/> </div>
  )
}


const Question=()=>  {
  return (
    <>
    
     <h3> Lets go for a <FaAddressBook />? </h3>
     <h3> Lets go for a <FaFacebook />? </h3>
    </>
  )
}
export default About;
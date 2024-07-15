import React from 'react'
import SignUpForm from '../../components/SignUp'

const SignUp = () => {
  return (
    <div className="w-full relative  overflow-hidden flex flex-col items-start justify-start  pt-9 px-10 md:px-20  gap-[9.487rem] leading-[normal] tracking-[normal] pb-[10rem] ">
     
      <img
        className="w-[6.119rem] h-[2rem] relative object-cover"
        loading="lazy"
        alt=""
        src="/EastWest _Logo.png"
      />

<div className="absolute flex items-end justify-end bottom-0 right-0  z-[-40]">
    <img className="" src="SignUpBGimg.svg" alt="East West Background Image" />
    {/* width: 84.5rem;
height: 84.51rem;
top: 8.56rem;
left: 7.44rem;
gap: 0rem; 
opacity: 0;  
angle: -0deg;  */}

  </div>
      <SignUpForm />
    </div> 
  )
}

export default SignUp

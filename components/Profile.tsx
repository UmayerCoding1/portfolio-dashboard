'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';


export const myImage = '/assets/my-image.jpg';
export const myResume = '/assets/my-resume.pdf';
const Profile = () => {
    const user  = useSelector((state:any) => state.auth.user);
    console.log(user);
    
        
    return (
        <div className='relative p-10'>
           <Image src={myImage} alt='my-image' width={500}
      height={500} className='w-80 h-80 rounded-full'/>

      <iframe 
       src={myResume}
       width="20%"
       title='my resume'
       height="200px"
       className="border-0"
      />
        </div>
    );
};

export default Profile;
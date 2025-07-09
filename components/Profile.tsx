'use client'
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user  = useSelector((state:any) => state.auth.user);
    
        
    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
};

export default Profile;
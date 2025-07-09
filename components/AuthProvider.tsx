"use client"

import { setUser } from '@/app/store/authSlice';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const AuthProvider = ({children} : {children: React.ReactNode}) => {
     const dispatch = useDispatch();

     useEffect(() => {
        const fetchUser = async () => {
      try {
        const res = await axios.get('/api/auth/me'); // Your endpoint that returns user from cookie
        if (res.data?.user) {
          dispatch(setUser(res.data.user));
        }
      } catch (err) {
        console.log('User not logged in', err);
      }
    };

    fetchUser();
     }, [dispatch])
 

    return <> {children}</>
};

export default AuthProvider;
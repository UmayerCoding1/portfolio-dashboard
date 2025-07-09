"use client";

import { setUser } from "@/app/store/authSlice";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const pathname = usePathname();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/login", { withCredentials: true }); // Your endpoint that returns user from cookie
        if (res.data?.user) {
          dispatch(setUser(res.data.user));
        }
      } catch (err) {
        console.log("User not logged in", err);
      }
    };

    fetchUser();
  }, [dispatch]);

  console.log(pathname);

  if (!user && pathname !== "/login") {
    return (
      <div className="flex items-center justify-center flex-col gap-3 h-[400px]">
        <p> you are not logged in please login!</p>

        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    );
  }
  return <> {children} </>;
};

export default AuthProvider;

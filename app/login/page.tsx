"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LoginFormErrors,
  LoginFormSchema,
  type LoginForm,
} from "@/types/LoginForm";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";



const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = LoginFormSchema.safeParse(formData);

    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors);
      return;
    } else {
      setErrors({});
      console.log(formData);
    }
   setIsLoading(true);
    try {
      const res = await axios.post("/api/login", formData);
      console.log(res.data);
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        router.push("/");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center max-h-screen overflow-hidden lg:h-[500px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2 w-80 shadow p-2 rounded-lg h-[250px] bg-white dark:bg-zinc-900 text-black dark:text-white"
      >
        <h1 className="text-2xl font-bold">Login form</h1>

        <div className="flex flex-col gap-5 w-full">
          <div>
            <Label className="text-sm mb-1">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={changeInputHandler}
              required
              className="bg-white dark:bg-zinc-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
            />

            <p className="text-xs text-red-500">
              {errors.email && errors.email}
            </p>
          </div>

          <div>
            <Label className="text-sm mb-1">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={changeInputHandler}
              required
              className="bg-white dark:bg-zinc-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
            />
            <p className="text-xs text-red-500">
              {errors.password && errors.password[0]}{" "}
            </p>
          </div>

          <Button className="cursor-pointer ">{isLoading ? <Loader2 className="animate-spin"/> :  "Login" }</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;

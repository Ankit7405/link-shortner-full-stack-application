import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { data, Link, useNavigate } from "react-router-dom";
import TextFields from "./TextFields";
import toast from 'react-hot-toast';
import api from "../api/api";


const RegisterPage = () => {
    const navigate = useNavigate();
  const [loader, setLoader] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
        const { data : response } = await api.post(
            "/api/auth/public/register",
            data
        );
        reset();
        navigate("/login");
        toast.success("Registration Sccessfull!");
    } catch (error) {
        console.log(error);
        toast.error("Registration failed!");
    }finally{
        setLoader(false);
    }

  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="sm:w-[450px] w-[360px] shadow-[0_0_15px_rgba(0,0,0,0.3)] py-8 sm:px-8 px-4 rounded-md"
      >
        <h1 className="text-center font-[roboto] text-[#3364F7] font-bold lg:text-3xl text-2xl">
          Register Here
        </h1>
        <hr className="mt-2 mb-5 text-slate-400" />
        <div className="flex flex-col gap-3">
          <TextFields
            label="Username"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Type your username"
            register={register}
            errors={errors}
          />

          <TextFields
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Type your email"
            register={register}
            errors={errors}
          />

          <TextFields
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Type your password"
            register={register}
            errors={errors}
          />
        </div>
        <button disabled={loader} type="submit" className="bg-[#3364F7] font-semibold text-white  bg-gradient-to-r from-blue-500 to-purple-600 w-full py-2 hover:text-slate-400 transition-colors duration-100 my-3 rounded-sm">
            {loader ? "Loading..." : "Register"}
        </button>
        <p className="text-center text-sm text-slate-700 mt-6">
            Already have an account? 
            <Link className="font-semibold underline hover:text-black" to="/login">
                <span className="text-[#3364F7]">Login</span>
            </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;

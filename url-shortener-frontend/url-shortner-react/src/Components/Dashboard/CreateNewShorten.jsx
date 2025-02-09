import React, { useState } from "react";
import { useStoreContext } from "../../contextApi/ContextApi";
import { set, useForm } from "react-hook-form";
import api from "../../api/api";
import toast from "react-hot-toast";
import TextFields from "../TextFields";
import { Tooltip } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
        const{data: response} = await api.post("/api/urls/shorten", data, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        });

        const shortenUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${response.shortUrl}`;
        navigator.clipboard.writeText(shortenUrl).then(() => {
            toast.success("Short URL copied to clipboard");
        })
        // await refetch();
        reset();
        setOpen(false);
    } catch (error) {
        toast.error("Create URL failed");
    }finally{
        setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-white rounded-md">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[450px] w-[360px] relative shadow-[0_0_15px_rgba(0,0,0,0.3)] pt-8 pb-5 sm:px-8 px-4 rounded-md"
      >
        <h1 className="font-[montserrat] sm:mt-0 mt-3 text-center  font-bold sm:text-2xl text-[22px] text-slate-800 ">
                Create New Shorten Url
        </h1>
        <hr className="mt-2 sm:mb-5 mb-3 text-slate-950" />
        <div>
          <TextFields
            label="Enter URL"
            required
            id="originalUrl"
            placeholder="https://example.com"
            type="url"
            message="Url is required"
            register={register}
            errors={errors}
          />
        </div>
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white w-32  bg-custom-gradient  py-2  transition-colors  rounded-md my-3"
          type="text"
        >
          {loading ? "Loading..." : "Create"}
        </button>
        {!loading && (
          <Tooltip title="Close">
            <button
              disabled={loading}
              onClick={() => setOpen(false)}
              className=" absolute right-2 top-2  "
            >
              <RxCross2 className="text-slate-800   text-3xl" />
            </button>
          </Tooltip>
        )}
      </form>
    </div>
  );
};

export default CreateNewShorten;

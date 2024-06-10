"use client"
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  message: yup.string().required("Message is required"),
});

export const Contact: FC = () => {

  const { register, handleSubmit, formState: { errors },reset} = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className=" w-full flex flex-col items-center ">
      <div>
        <span className="text-3xl font-bold text-primary">Contact</span>
        <span className="text-3xl font-bold text-tertiary"> Us</span>
      </div>

      <div className="flex">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" p-8 rounded-lg w-full "
        >
            <div className="flex gap-8">

       
          <div className="mb-4">
            <label className="block text-tertiary mb-1" htmlFor="firstName">
              First name
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              className={`w-full outline-tertiary p-2  ${
                errors.firstName ? "border-primary" : "border-none"
              } rounded`}
            />
            {errors.firstName && (
              <p className="text-primary text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-tertiary mb-1" htmlFor="lastName">
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              className={`w-full p-2 ${
                errors.lastName ? "border-primary" : "border-none"
              } rounded`}
            />
            {errors.lastName && (
              <p className="text-primary text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-tertiary mb-1" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`w-full p-2 border ${
                errors.email ? "border-primary" : "border-none"
              } rounded`}
            />
            {errors.email && (
              <p className="text-primary text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-tertiary mb-1" htmlFor="message">
              Your message
            </label>
            <textarea
              id="message"
              {...register("message")}
              className={`w-full p-2  ${
                errors.message ? "border-primary" : "border-none"
              } rounded`}
              rows={4}
            />
            {errors.message && (
              <p className="text-primary text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 rounded hover:bg-orange-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


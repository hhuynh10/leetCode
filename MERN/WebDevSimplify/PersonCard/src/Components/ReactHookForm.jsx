import React from "react";
import ReactSelect from "react-select";
import { useController, useForm } from "react-hook-form";

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
];

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { field: countryField } = useController({
    name: "country",
    control,
    rules: { required: "Required" },
  });

  function onSubmit(data) {
    console.log(data);
    alert("Success");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        {...register("email", {
          required: "Required",
          validate: (value) => {
            if (!value.endsWith("@webdevsimplified.com")) {
              return "Must end with @webdevsimplified.com";
            }
          },
        })}
      />
      <div>{errors.email && <div>{errors.email.message}</div>}</div>

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: "Required",
          minLength: { value: 10, message: "Must be at least 10 characters" },
          validate: {
            hasLowerCase: (value) => {
              if (!value.match(/[a-z]/)) {
                return "Must include at least 1 lowercase letter";
              }
            },
            hasUpperCase: (value) => {
              if (!value.match(/[A-Z]/)) {
                return "Must include at least 1 uppercase letter";
              }
            },
            hasNumber: (value) => {
              if (!value.match(/[0-9]/)) {
                return "Must include at least 1 number";
              }
            },
          },
        })}
      />
      <div>{errors.password && <div>{errors.password.message}</div>}</div>

      <label htmlFor="country">Country</label>
      <ReactSelect
        isClearable
        // classNamePrefix="react-select"
        id="country"
        options={COUNTRY_OPTIONS}
        {...countryField}
      />
      <div>{errors.country && <div>{errors.country.message}</div>}</div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactHookForm;

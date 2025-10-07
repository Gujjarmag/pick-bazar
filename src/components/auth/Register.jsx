import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import LogoImage from "../../assets/auth_logo.webp";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { greenBtn } from "../../assets/style";

const initialRegisterFormValues = { name: "", email: "", password: "" };

const registerSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup.string().required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialRegisterFormValues,
    resolver: yupResolver(registerSchema),
  });

  const registerSumbit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <Card>
        <div className="flex justify-center">
          <div>
            <img src={LogoImage} alt="Logo Image" />
            <p className="text-center">Register new account</p>
          </div>
        </div>

        <form className="" onSubmit={handleSubmit(registerSumbit)}>
          <div className="flex justify-center">
            <div>
              <label>Name</label> <br />
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField {...field} />}
              />
              <p className="text-red-500">{errors?.name?.message}</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <label>Email</label> <br />
              <Controller
                name="email"
                control={control}
                render={({ field }) => <TextField {...field} />}
              />
              <p className="text-red-500">{errors?.email?.message}</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <label>Password</label> <br />
              <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField {...field} />}
              />
              <p className="text-red-500">{errors?.password?.message}</p>
            </div>
          </div>

          <div className="text-center mt-3">
            <Button type="submit" style={greenBtn}>
              Register
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Register;

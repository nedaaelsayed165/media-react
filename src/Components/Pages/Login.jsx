// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../AppContext/AppContext";
import { auth, onAuthStateChanged } from "../firebase/firebase";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, loginWithEmailAndPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);

  let initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Required")
      .min("6", "Must be at least 6 characters long")
      .matches(/^[a-zA-Z]+$/, "Password can only contain letters"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    if (formik.isValid === true) {
      loginWithEmailAndPassword(email, password);
      setLoading(true);
    } else {
      setLoading(false);
      alert("Check your input fields");
    }

    console.log("formik", formik);
  };

  const formik = useFormik({ initialValues, validationSchema, handleSubmit });

  return (
    <>
      {loading ? (
        <div className=" grid grid-cols-1 justify-items-center items-center h-screen">
          <ClipLoader color="#367fd6" size={150} speedMultiplier={0.5} />
        </div>
      ) : (
        <div className=" bg-[url('/images/loginbg.jpeg')] grid grid-cols-1  h-screen justify-items-center items-center">
          <Card className="w-[400px] bg-slate-50">
            <CardHeader
              variant="gradient"
             
              className="bg-orange-200 mb-4 grid h-28 place-items-center "
            >
              <Typography className="text-sm " color="black">
                WELCOME
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col px-3 gap-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="text-black  gap-2" >Email</label>
                  <Input
                    name="email"
                    type="email"
                    // label="Email"
                    size="lg"
                    className=" mb-5 py-3 p-3"
                    {...formik.getFieldProps("email")}
                  />
                </div>
                <div>
                  {formik.touched.email && formik.errors.email && (
                    <Typography variant="small" color="red">
                      {formik.errors.email}
                    </Typography>
                  )}
                </div>
                <div className="mt-4 mb-2">
                  <label className="text-black gap-1">Password</label>
                  <Input
                    name="password"
                    type="password"
                    // label="Password"
                    size="lg"
                    {...formik.getFieldProps("password")}
                  />
                  <div>
                    {formik.touched.password && formik.errors.password && (
                      <Typography variant="small" color="red">
                        {formik.errors.password}
                      </Typography>
                    )}
                  </div>
                </div>
                <Link to="/reset">
                <p className="ml-1 font-bold font-roboto text-[10px] text-orange-400 text-left ">
                Forgot the password ?
                </p>
              </Link>
              <br/>
              <br/>
                <Button
                  variant="gradient"
                  fullWidth
                  className="mb-4 border-2 bg-orange-200 text-black"
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </CardBody>
            <CardFooter className="pt-0 px-3">
              <Button
                variant="gradient"
                fullWidth
                className="mb-4 border-2 bg-orange-200 text-black"
                onClick={signInWithGoogle}
              >
                Sign In with Google
              </Button>
             
              <div className="mt-0 flex items-center font-roboto text-[10px] justify-center">
                Dont have an account?
                <Link to="/register">
                  <p className="ml-1 font-bold font-roboto text-[10px] text-orange-400 text-left ">
                    Register
                  </p>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Login;

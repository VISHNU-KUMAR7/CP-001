import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../redux/action/userAction";
import ErrorMsg from "./error/ErrorMsg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, eMail, status, fName, cat } = useSelector(
    (state) => state.userData
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("eMail", eMail);
      localStorage.setItem("fName", fName);
      localStorage.setItem("cat", cat);
      navigate("/");
    }
    toast(status);
  }, [status]);

  const initialValues = {
    password: "",
    eMail: "",
    cat: "",
  };
  const onSubmit = (values, onSubmitProps) => {
    console.log("0 values from loginform", values);
    dispatch(login(values));
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password Must be Eight characters long!")
      .max(20, "Too Long!")
      .required("Password is required!"),
    eMail: Yup.string().required("Email is required!"),
    cat: Yup.string().required("Login as ??"),
  });

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center mt-5 pt-5 border border-dark border-4 rounded rounded-2">
            <h3
              className="col-md-12"
              style={{ textAlign: "left", color: "#FF5349" }}
            >
              Login
            </h3>
            <hr style={{ margin: "10px 0 30px 0" }} />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group m-2">
                      <label htmlFor="eMail">Email</label>
                      <Field
                        id="eMail"
                        name="eMail"
                        placeholder="Holly@Dolly.com"
                        className="eMail form-control"
                        type="email"
                      />
                      <ErrorMessage name="eMail" component={ErrorMsg} />
                    </div>

                    <div className="form-group m-2">
                      <label htmlFor="password">Password</label>
                      <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder="**********"
                        className="form-control"
                      />
                      <ErrorMessage name="password" component={ErrorMsg} />{" "}
                    </div>
                    <div className="form-group m-2">
                      <label htmlFor="password">Login as </label>
                      <Field id="cat" value="user" name="cat" type="radio" />
                      <label htmlFor="male">user</label>
                      <Field id="cat" value="admin" name="cat" type="radio" />
                      <label htmlFor="male">Admin</label>
                      <ErrorMessage name="cat" component={ErrorMsg} />{" "}
                    </div>

                    <div className="row justify-content-center my-3">
                      <div className="col-md-4 col-sm-3">
                        <button
                          type="button"
                          className="btn btn-primary m-md-3"
                          style={{
                            borderColor: "#FF5349",
                            backgroundColor: "#FF5349",
                          }}
                          onClick={() => {
                            navigate("/");
                          }}
                        >
                          Back
                        </button>
                      </div>

                      <div className="col-md-6 col-sm-3">
                        <button
                          type="Submit"
                          className="btn m-md-3"
                          style={{
                            backgroundColor: "#FF5349",
                            borderColor: "#FF5349",
                            color: "white",
                          }}
                          disabled={
                            !(
                              (formik.dirty && formik.isValid) ||
                              formik.isSubmitting
                            )
                          }
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="row justify-content-center my-md-2">
              <div className="col-xl-7 col-lg-10 col-md-12">
                New to Dashboard?{" "}
                <Link to="/register"> Create an account.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

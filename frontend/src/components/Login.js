import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../redux/action/userAction";
import ErrorMsg from "./error/ErrorMsg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const results = useSelector((state) => state.userData);
  useEffect(() => {
    if (results.token) {
      localStorage.setItem("token", results.token);
      navigate("/");
    }
    toast(results.status);
  }, [results]);

  const initialValues = {
    password: "",
    eMail: "",
  };
  const onSubmit = (values, onSubmitProps) => {
    dispatch(login(values));
    onSubmitProps.preventDefault();
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required!"),
    eMail: Yup.string().required("Email is required!"),
  });

  return (
    <>
      <ToastContainer /> Login
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
                      <label htmlFor="password">assword</label>
                      <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder="**********"
                        className="form-control"
                      />
                      <ErrorMessage name="password" component={ErrorMsg} />{" "}
                    </div>

                    <div className="row justify-content-center my-3">
                      <div className="col-md-4 ">
                        <button
                          type="button"
                          className="btn btn-primary"
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

                      <div className="col-md-4">
                        <button
                          type="Submit"
                          className="btn"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

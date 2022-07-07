import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import ErrorMsg from "./error/ErrorMsg";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/action/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Forms(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();
  const { status, token, eMail } = useSelector((state) => state.userData);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("eMail", eMail);
      navigate("/");
    }
    toast(status);
  }, [status]);

  const initialValues = {
    fName: "",
    lName: "",
    password: "",
    eMail: "",
    phoneNo: "",
    location: "",
    cat: "user",
  };
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    dispatch(register(values));
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
  };

  const validationSchema = Yup.object({
    fName: Yup.string().required("First Name is required!"),
    lName: Yup.string().required("Last Name is required!"),
    password: Yup.string().required("Password is required!"),
    eMail: Yup.string().required("Email is required!"),
    phoneNo: Yup.string().required("Phone Number is required!"),
    location: Yup.string().required("Location is required!"),
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
              Register
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
                      <label htmlFor="fName">First Name</label>
                      <Field
                        id="fName"
                        name="fName"
                        placeholder="First Name"
                        className="fName form-control"
                        type="text"
                      />
                      <ErrorMessage name="fName" component={ErrorMsg} />
                    </div>

                    <div className="form-group m-2">
                      <label htmlFor="lName">Last Name</label>
                      <Field
                        id="lName"
                        name="lName"
                        placeholder="Last Name"
                        className="lName form-control"
                        type="text"
                      />
                      <ErrorMessage name="lName" component={ErrorMsg} />
                    </div>

                    <div className="form-group m-2">
                      <label htmlFor="eMail">Email Id</label>
                      <Field
                        id="eMail"
                        name="eMail"
                        placeholder="Email Id"
                        className="eMail form-control"
                        type="eMail"
                      />
                      <ErrorMessage name="eMail" component={ErrorMsg} />
                    </div>

                    <div className="form-group m-2">
                      <label htmlFor="password">Password</label>
                      <Field
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="password form-control"
                        type="password"
                      />
                      <ErrorMessage name="password" component={ErrorMsg} />
                    </div>

                    <div className="form-group m-2">
                      <label htmlFor="password">Confirm Password</label>
                      <Field
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="password form-control"
                        type="password"
                      />
                      <ErrorMessage name="password" component={ErrorMsg} />
                    </div>

                    <div className="form-group m-2">
                      <label htmlFor="phoneNo">Phone Number</label>
                      <Field
                        id="phoneNo"
                        name="phoneNo"
                        placeholder="9999999999"
                        className="phoneNo form-control"
                        type="phoneNo"
                      />
                      <ErrorMessage name="phoneNo" component={ErrorMsg} />
                    </div>

                    <div className="form-group m-2">
                      <label htmlFor="location">Location</label>
                      <Field
                        id="location"
                        name="location"
                        placeholder="Location"
                        className="location form-control"
                        type="location"
                      />
                      <ErrorMessage name="location" component={ErrorMsg} />
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
                          Register
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="row justify-content-center my-md-2">
              <div className="col-xl-7 col-lg-10 col-md-12">
                Already have a Dashboard? <Link to="/login"> Login.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

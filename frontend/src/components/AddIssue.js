import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import ErrorMsg from "./error/ErrorMsg";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addIssue } from "../redux/action/issueAction";

export default function Forms(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const initialValues = {
    description: "",
    severity: "",
    status: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("0 AddIssue called", { ...values, eMail: "Holly@Dolly.com" });
    dispatch(addIssue({ ...values, eMail: "Holly@Dolly.com" }));
    console.log(values);
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    // navigate("/");
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Description is required!"),
    severity: Yup.string().required("Severity is required!"),
    status: Yup.string().required("Status is required!"),
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
              Add Issue
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
                      <label htmlFor="description">Issue Description</label>
                      <Field
                        id="description"
                        name="description"
                        placeholder="Issue Description"
                        className="description form-control"
                        component="textarea"
                        rows="4"
                      />
                      <ErrorMessage name="description" component={ErrorMsg} />
                    </div>

                    <div className="form-group m-2">
                      <label htmlFor="severity">Severity</label>
                      <Field
                        as="select"
                        name="severity"
                        className="form-control"
                      >
                        <option value="minor">Minor</option>
                        <option value="major">Major</option>
                        <option value="critical">Critical</option>
                      </Field>
                      <ErrorMessage name="severity" component={ErrorMsg} />{" "}
                    </div>

                    <div className="form-group m-2">
                      <label htmlFor="status">Status</label>
                      <Field as="select" name="status" className="form-control">
                        <option value="open">Open</option>
                        <option value="inprogress">Inprogress</option>
                        <option value="close">Close</option>
                      </Field>
                      <ErrorMessage name="status" component={ErrorMsg} />{" "}
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
          </div>
        </div>
      </div>
    </>
  );
}

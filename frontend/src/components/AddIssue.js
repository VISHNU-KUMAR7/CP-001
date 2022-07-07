import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "./error/ErrorMsg";
import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addIssue, editIssue } from "../redux/action/issueAction";

export default function Forms(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const eMail = localStorage.getItem("eMail");
  const { data } = props;
  // const { description, _id, severity, status } = data;
  const initialValues = {
    description: data ? data.description : "",
    severity: data ? data.severity : "",
    status: data ? data.status : "",
  };

  const onSubmit = (values, onSubmitProps) => {
    data
      ? dispatch(editIssue({ _id: data._id, eMail: data.eMail, ...values }))
      : dispatch(addIssue({ ...values, eMail }));
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    navigate(-1);
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Description is required!"),
    severity: Yup.string().required("Severity is required!"),
    status: Yup.string().required("Status is required!"),
  });
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center mt-5 pt-5 border border-dark border-4 rounded rounded-2">
            <h3
              className="col-md-12"
              style={{ textAlign: "left", color: "#FF5349" }}
            >
              {data ? "Edit" : "Add"} Issue
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
                          className="btn btn-outline-primary"
                          style={{
                            borderColor: "#FF5349",
                            color: "#FF5349",
                          }}
                          onClick={() => {
                            navigate(-1);
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
                          {data ? "Update" : "Add"}
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

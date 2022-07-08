import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function DetailIssue() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-6  mt-5 pt-5 border border-dark border-4 rounded rounded-2">
          <h3
            className="col-md-12"
            style={{ textAlign: "left", color: "#FF5349" }}
          >
            Detail Issue
          </h3>
          <hr />

          <div className="col-md-12 m-auto">
            <div className="row m-auto">
              <div className="col-md-12 offset-md-2 ">
                <h3>Id: {data._id}</h3>
                <p>
                  Description:
                  {data.description}
                </p>
                <p>
                  Severity:
                  {data.severity === "critical" ? (
                    <>
                      <span className="badge text-bg-warning  ">
                        {data.severity}
                      </span>
                    </>
                  ) : (
                    <>
                      {" "}
                      {data.severity === "minor" ? (
                        <>
                          <span className="badge text-bg-success  ">
                            {data.severity}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="badge text-bg-dark  ">
                            {data.severity}
                          </span>
                        </>
                      )}
                    </>
                  )}
                </p>
                <p>
                  Status:
                  {data.status === "open" ? (
                    <>
                      <span className="badge text-bg-danger">
                        {data.status}
                      </span>
                    </>
                  ) : (
                    <>
                      {" "}
                      {data.status === "close" ? (
                        <>
                          <span className="badge text-bg-info">
                            {data.status}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="badge text-bg-primary">
                            {data.status}
                          </span>
                        </>
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-10 m-auto ">
            <div className="row justify-content-evenly">
              <div className="col-3 mb-2">
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
              <div className="col-3">
                <button
                  type="Submit"
                  className="btn"
                  style={{
                    backgroundColor: "#FF5349",
                    borderColor: "#FF5349",
                    color: "white",
                  }}
                  onClick={() => navigate("/")}
                >
                  Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

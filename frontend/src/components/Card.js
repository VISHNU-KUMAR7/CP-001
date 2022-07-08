import React from "react";
import { useDispatch } from "react-redux";
import { delIssue } from "../redux/action/issueAction";
import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cat = localStorage.getItem("cat");
  const { _id, description, severity, status, eMail } = props;
  const deleteIssue = async (e) => {
    if (window.confirm(`R u want to delet ${_id}`)) {
      dispatch(delIssue({ _id }));
      navigate("/viewIssue");
    }
  };
  return (
    <>
      <div className="col-md-3 ">
        <div
          className="card border border-danger border-2 rounded text-dark opacity-75 mb-5"
          key={_id}
        >
          <h5 className="card-title">
            <input type="checkbox" />{" "}
          </h5>
          <h6 className="card-header mb-2 text-muted">
            <Link
              to={`/detailIssue/:${_id}`}
              state={{ _id, description, severity, status }}
              className="navTitleLink"
              style={{ color: "black" }}
            >
              {_id}
            </Link>
          </h6>
          <div className="card-body">
            <p className="card-text text-truncate">{description}</p>
            <div className="row">
              <div className="col-lg-4 col-md-5 ">
                <h6 className="card-title">Severity:</h6>
              </div>
              <div className="col-lg-8 col-md-6">
                {severity === "critical" ? (
                  <>
                    <span className="badge text-bg-warning">{severity}</span>
                  </>
                ) : (
                  <>
                    {" "}
                    {severity === "minor" ? (
                      <>
                        <span className="badge text-bg-success">
                          {severity}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="badge text-bg-dark">{severity}</span>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-5 ">
                <h6 className="card-title">Status:</h6>
              </div>
              <div className="col-lg-8 col-md-6">
                {status === "open" ? (
                  <>
                    <span className="badge text-bg-danger">{status}</span>
                  </>
                ) : (
                  <>
                    {" "}
                    {status === "close" ? (
                      <>
                        <span className="badge text-bg-info">{status}</span>
                      </>
                    ) : (
                      <>
                        <span className="badge text-bg-primary">{status}</span>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            {cat === "admin" ? (
              <>
                <div className="row">
                  <div className="col-lg-4 col-md-5 ">
                    <h6 className="card-title">UserId:</h6>
                  </div>
                  <div className="col-lg-8 col-md-6">
                    <span>{eMail}</span>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className=" row">
              <div className="card-title col-lg-4 col-md-5 ">Action: </div>
              <div className="col-lg-8 col-md-6">
                {eMail === localStorage.getItem("eMail") ? (
                  <>
                    <Link
                      to="/editIssue"
                      className="card-link text-success d-inline-block"
                      state={{ _id, description, severity, status }}
                    >
                      <ion-icon name="create-outline"></ion-icon>
                    </Link>
                  </>
                ) : (
                  <></>
                )}
                <Link
                  to="#"
                  className="card-link text-danger"
                  onClick={(e) => {
                    deleteIssue(e);
                  }}
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

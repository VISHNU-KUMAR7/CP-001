import React from "react";
import { useDispatch } from "react-redux";
import { delIssue } from "../redux/action/issueAction";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Table(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cat = localStorage.getItem("cat");
  const {
    _id,
    description,
    severity,
    status,
    eMail,
    check,
    idCol,
    descCol,
    severityCol,
    statusCol,
    emailCol,
  } = props;
  const deleteIssue = async (e) => {
    if (window.confirm(`R u want to delet ${_id}`)) {
      dispatch(delIssue({ _id }));
      navigate(-1);
    }
  };
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" checked={`${check}`} />
        </td>
        <th scope="row" className={`${idCol}`}>
          <Link
            to={`/detailIssue/:${_id}`}
            state={{ _id, description, severity, status }}
            className="navTitleLink"
            style={{ color: "white" }}
          >
            {_id}
          </Link>
        </th>
        <td className={`${descCol}`}>{description}</td>
        <td className={`${severityCol}`}>
          {severity === "critical" ? (
            <>
              <span className="badge text-bg-warning  ">{severity}</span>
            </>
          ) : (
            <>
              {" "}
              {severity === "minor" ? (
                <>
                  <span className="badge text-bg-success  ">{severity}</span>
                </>
              ) : (
                <>
                  <span className="badge text-bg-dark  ">{severity}</span>
                </>
              )}
            </>
          )}{" "}
        </td>
        <td className={`${statusCol}`}>
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
        </td>
        {cat === "admin" ? <td>{eMail}</td> : ""}
        <td className={`${emailCol}`}>
          <div className="row ">
            <div className="col-lg-3 col-md-5 ">
              {eMail === localStorage.getItem("eMail") ? (
                <>
                  <Link
                    to="/editIssue"
                    className="card-link d-inline-block"
                    state={{ _id, description, severity, status }}
                    style={{ color: "#006400" }}
                  >
                    <ion-icon name="create-outline"></ion-icon>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="col-lg-3 col-md-5">
              <Link
                to="#"
                className="card-link text-danger d-inline-block"
                onClick={(e) => {
                  deleteIssue(e);
                }}
              >
                <ion-icon name="trash-outline"></ion-icon>
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

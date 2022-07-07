import React from "react";
import { useDispatch } from "react-redux";
import { delIssue } from "../redux/action/issueAction";
import { Link, useNavigate } from "react-router-dom";

export default function Table(props) {
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
      <tr>
        <th scope="row">{_id}</th>
        <td>{description}</td>
        <td>{severity}</td>
        <td>{status}</td>
        {cat === "admin" ? <td>{eMail}</td> : ""}
        <td>
          <div className="row">
            <div className="col-md-5">
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
            </div>
            <div className="col-md-5">
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

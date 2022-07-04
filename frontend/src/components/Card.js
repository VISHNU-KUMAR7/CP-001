import React from "react";
import { useDispatch } from "react-redux";
import { delIssue } from "../redux/action/issueAction";
import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, description, severity, status } = props;
  const deleteIssue = async (e) => {
    if (window.confirm(`R u want to delet ${_id}`)) {
      dispatch(delIssue({ _id }));
      navigate("/viewIssue");
    }
  };
  return (
    <>
      Card
      <div className="card" style={{ width: "20rem" }} key={_id}>
        <div className="card-body">
          <h5 className="card-title">Issue ID </h5>
          <h6 className="card-subtitle mb-2 text-muted">{_id}</h6>
          <p className="card-text">{description}</p>

          <h6 className="card-title">Severity:</h6>
          <span>{severity}</span>
          <h6 className="card-title">Status:</h6>
          <span>{status}</span>
          <Link
            to="/editIssue"
            className="card-link text-success"
            state={{ _id, description, severity, status }}
          >
            <ion-icon name="create-outline"></ion-icon>
          </Link>
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
    </>
  );
}

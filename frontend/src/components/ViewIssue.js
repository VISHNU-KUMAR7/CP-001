import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue, getIssueBySearch } from "../redux/action/issueAction";

export default function ViewIssue() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.issueData);
  const eMail = localStorage.getItem("eMail");
  useEffect(() => {
    dispatch(getIssue(eMail));
  }, []);
  useEffect(() => {});
  const searchText = (e) => {
    // eMail, searchItem, skip, limit
    console.log(e.target.value.length);
    if (e.target.value.length !== 0) {
      dispatch(
        getIssueBySearch({
          searchItem: e.target.value,
          eMail,
          skip: 0,
          limit: 5,
        })
      );
    } else {
      dispatch(getIssue(eMail));
    }
  };

  return (
    <>
      <div>ViewIssue</div>
      <input type={"text"} onChange={(e) => searchText(e)} />
      {result.map((data) => {
        return (
          <>
            <div className="card" style={{ width: "20rem" }} key={data.id}>
              <div className="card-body">
                <h5 className="card-title">Issue ID </h5>
                <h6 className="card-subtitle mb-2 text-muted">{data._id}</h6>
                <p className="card-text">{data.description}</p>

                <h6 className="card-title">Severity:</h6>
                <text>{data.severity}</text>
                <h6 className="card-title">Status:</h6>
                <text>{data.status}</text>
                <a href="#" className="card-link">
                  <ion-icon name="create-outline"></ion-icon>
                </a>
                <a href="#" className="card-link">
                  <ion-icon name="trash-outline"></ion-icon>
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTotalIssueByUser } from "../redux/action/userAction";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const eMail = localStorage.getItem("eMail");
  const cat = localStorage.getItem("cat");
  const TotalIssue = useSelector((state) => state.userData);
  const [totalIssue, setTotalIssue] = useState({});
  useEffect(() => {
    dispatch(getTotalIssueByUser({ eMail, cat }));
  }, []);
  console.log(totalIssue);
  useEffect(() => {
    setTotalIssue(TotalIssue);
  }, [TotalIssue]);

  const logout = (e) => {
    console.log(
      "Logout is not working for all. It will work only when you refresh ur page once or do dome activiy.",
      localStorage.getItem("eMail")
    );
    localStorage.removeItem("eMail");
    console.log(localStorage.getItem("eMail"));
    navigate("/login");
  };
  return (
    <>
      <div className="row border border-info border-2 rounded  px-lg-5 py-auto px-md-3 px-sm-2 justify-content-center text-bg-secondary">
        {/* <div className="d-fill border border-info border-2"></div> */}
        <div className="col-xl-2 offset-xl-4 col-lg-4 offset-lg-2 col-md-3 offset-md-2 text-bg-light border border-info border-2 rounded ">
          Welcome To Dashboard
        </div>
        <div className="col-lg-3 offset-lg-1">
          Total Issue: {totalIssue.totIssues}
        </div>
      </div>
      <div className="row ">
        <div className="col-md-8">

        </div>
      </div>
    </>
  );
}

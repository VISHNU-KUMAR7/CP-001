import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTotalIssueByUser } from "../redux/action/userAction";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
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
  useEffect(() => {
    setTotalIssue(TotalIssue);
  }, [TotalIssue]);

  const data01 = [
    {
      index: 1,
      name: "Critical",
      value: totalIssue.totIssuesCri,
    },
    {
      index: 2,
      name: "Minor",
      value: totalIssue.totIssuesMinor,
    },
    {
      index: 3,
      name: "Major",
      value: totalIssue.totIssuesMajor,
    },
  ];
  const color01 = ["#0066ff", "#ff3399", "#99ff66"];
  const data02 = [
    {
      index: 1,
      name: "Close",
      value: totalIssue.totIssuesClose,
    },
    {
      index: 2,
      name: "Open",
      value: totalIssue.totIssuesOpen,
    },
    {
      index: 3,
      name: "Inprogress",
      value: totalIssue.totIssuesInp,
    },
  ];
  const color02 = ["#9933ff", "#cc6600", "#66ffcc"];

  return (
    <>
      <div className="row border border-info border-2 rounded  px-lg-5 py-auto px-md-3 px-sm-2 justify-content-center text-bg-light mt-lg-2 mx-lg-3">
        <div className="col-xl-3 offset-xl-4 offset-lg-2 col-lg-8  col-md-3 offset-md-2 my-lg-2 my-md-2 ">
          Welcome To Dashboard
        </div>
        <div className="offset-lg-1 col-lg-3   my-lg-3 my-md-2 my-sm-1">
          Total Issue: {totalIssue.totIssues}
        </div>
      </div>
      <div className="row justify-content-evenly ">
        <div className="col-md-5 border border-info border-3 rounded  align-self-center m-5 px-lg-4 py-lg-2 text-bg-light opacity-75">
          <h3 className="mx-5 text-danger border-bottom border-danger pb-md-3">
            Severity{" "}
          </h3>
          {/* <hr /> */}
          <ResponsiveContainer width="100%" height={300}>
            <PieChart style={{ position: "relative" }}>
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={80}
                fill="#82ca9d"
                label
              >
                {data02.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={color02[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="row justify-content-between">
            <div className="col-md-3  m-0 p-0">
              <div className="row ml-md-5 justify-content-end">
                <div
                  className="col-md-1 w-10 h-10"
                  style={{ backgroundColor: "#9933ff" }}
                ></div>
                <div className="col-md-8">
                  Close:
                  {totalIssue.totIssuesClose}
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="row ml-md-5 justify-content-end">
                <div
                  className="col-md-1 w-10 h-10"
                  style={{ backgroundColor: "#cc6600" }}
                ></div>
                <div className="col-md-8">
                  {" "}
                  Open: {totalIssue.totIssuesOpen}{" "}
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="row ml-md-5 justify-content-end">
                <div
                  className="col-md-1 w-10 h-10"
                  style={{ backgroundColor: "#66ffcc" }}
                ></div>
                <div className="col-md-8">
                  {" "}
                  Inprogress: {totalIssue.totIssuesInp}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 border border-info border-3 rounded  align-self-center m-5 px-lg-4 py-lg-2 text-bg-light opacity-75">
          <h3 className="mx-5  text-danger border-bottom border-danger pb-md-3">
            Status{" "}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart style={{ position: "relative" }}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={80}
                fill="#82ca9d"
                label
              >
                {data01.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={color01[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="row justify-content-between">
            <div className="col-lg-4  m-0 p-0">
              <div className="row ml-md-5 justify-content-end">
                <div
                  className="col-md-1  w-10 h-10"
                  style={{ backgroundColor: "#0066ff" }}
                ></div>
                <div className="col-md-8">
                  Ciritical: {totalIssue.totIssuesCri}
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="row ml-md-5 justify-content-end">
                <div
                  className="col-md-1  w-10 h-10"
                  style={{ backgroundColor: "#ff3399" }}
                ></div>
                <div className="col-md-8">
                  {" "}
                  Minor: {totalIssue.totIssuesMinor}
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="row ml-md-5 justify-content-end">
                <div
                  className="col-md-1  rounded w-10 h-10"
                  style={{ backgroundColor: "#99ff66" }}
                ></div>
                <div className="col-md-8">
                  {" "}
                  Major: {totalIssue.totIssuesMajor}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

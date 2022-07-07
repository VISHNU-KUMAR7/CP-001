import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTotalIssueByUser } from "../redux/action/userAction";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
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

  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  // const logout = (e) => {
  //   console.log(
  //     "Logout is not working for all. It will work only when you refresh ur page once or do dome activiy.",
  //     localStorage.getItem("eMail")
  //   );
  //   localStorage.removeItem("eMail");
  //   console.log(localStorage.getItem("eMail"));
  //   navigate("/login");
  // };
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
      <div className="row justify-content-evenly ">
        <div className="col-md-3 border border-info border-3 rounded h-100">
          <PieChart style={{ position: "relative" }} width={250} height={250}>
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              labeel
            />
          </PieChart>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
}

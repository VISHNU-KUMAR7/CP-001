import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Navbar() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.cssData);
  let toggle = data ? "col-sm-1" : "col-sm-2";
  const login = localStorage.getItem("eMail");
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div
      className={`${toggle}`}
      style={{ border: "1px dotted red", height: "95vh" }}
    >
      <div
        className="row flex-column"
        style={{ border: "2px solid blue", height: "95vh" }}
      >
        <div
          className="col-12  "
          style={{ border: "2px solid red", height: "6vh" }}
        >
          <div className="row justify-content-around offset-1 my-auto">
            <div className="col-3">
              <Link to="/">
                <ion-icon name="home-outline"></ion-icon>
              </Link>
            </div>
            <div className="col-7 align-self-center">
              <Link to="/">
                <span className="font-weight-bold" style={{ fontSize: "17px" }}>
                  {data ? "" : "Dashboard"}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        {login ? (
          <>
            <div
              className="col-12  "
              style={{ border: "2px solid red", height: "60vh" }}
            >
              <div className="row justify-content-around offset-1">
                <div className="col-3">
                  <Link to="/viewIssue">
                    <ion-icon name="eye-outline"></ion-icon>
                  </Link>
                </div>
                <div className="col-7 align-self-center">
                  <Link to="/viewIssue">
                    <span
                      className="font-weight-bold"
                      style={{ fontSize: "17px" }}
                    >
                      {data ? "" : "View Issue"}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="row justify-content-around offset-1 mt-1">
                <div className="col-3">
                  <Link to="/addIssue">
                    <ion-icon name="add-outline"></ion-icon>
                  </Link>
                </div>
                <div className="col-7 align-self-center">
                  <Link to="/addIssue">
                    <span
                      className="font-weight-bold"
                      style={{ fontSize: "17px" }}
                    >
                      {data ? "" : "Add Issue"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <hr />

            <div className="col-12  " style={{ border: "2px solid red" }}>
              <div className="row justify-content-around offset-1">
                <div className="col-3">
                  <Link to="/profile">
                    <ion-icon name="person-outline"></ion-icon>
                  </Link>
                </div>
                <div className="col-7 align-self-center">
                  <Link to="/profile">
                    <span
                      className="font-weight-bold"
                      style={{ fontSize: "17px" }}
                    >
                      {data ? "" : "View Profile"}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="row justify-content-around offset-1 mt-1">
                <div className="col-3">
                  <ion-icon
                    name="log-out-outline"
                    onClick={() => {
                      logout();
                    }}
                  ></ion-icon>
                </div>
                <div className="col-7 align-self-center">
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "17px" }}
                    onClick={() => {
                      logout();
                    }}
                  >
                    {data ? "" : "Logout"}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <><div style={{ height: "60vh"}}></div>
            <div
              className="col-12  "
              style={{ border: "2px solid red", height: "6vh" }}
            >
              <div className="row justify-content-around offset-1 my-auto">
                <div className="col-3">
                  <Link to="/login">
                    <ion-icon name="log-in-outline"></ion-icon>
                  </Link>
                </div>
                <div className="col-7 align-self-center">
                  <Link to="/login">
                    <span
                      className="font-weight-bold"
                      style={{ fontSize: "17px" }}
                    >
                      {data ? "" : "Login"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

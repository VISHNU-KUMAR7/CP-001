import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.cssData);
  let toggle = data ? "col-sm-1" : "col-sm-2";
  const login = localStorage.getItem("eMail");
  const logout = () => {
    if (window.confirm("Do you want to logout from this page")) {
      localStorage.clear();
      navigate("/logout");
    }
  };
  return (
    <div className={`${toggle} mt-2`} style={{ height: "94vh" }}>
      <div className="row flex-column " style={{ height: "94vh" }}>
        <div className="col-12  " style={{ height: "6vh" }}>
          <div className="row justify-content-around offset-xl-1 my-auto">
            <div className="col-xl-3 col-lg-2 ">
              <Link to="/">
                <ion-icon name="home-outline"></ion-icon>
              </Link>
            </div>
            <div className="col-lg-7  align-self-center">
              <Link to="/" className="navTitleLink">
                <span className="navTitle">{data ? "" : "Dashboard"}</span>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        {login ? (
          <>
            <div className="col-12  " style={{ height: "60vh" }}>
              <div className="row justify-content-around offset-xl-1">
                <div className="col-xl-3 col-lg-2">
                  <Link to="/viewIssue">
                    <ion-icon name="eye-outline"></ion-icon>
                  </Link>
                </div>
                <div className="col-lg-8 align-self-center">
                  <Link to="/viewIssue" className="navTitleLink">
                    <span className="navTitle">{data ? "" : "View Issue"}</span>
                  </Link>
                </div>
              </div>
              <div className="row justify-content-around offset-xl-1 mt-1">
                <div className="col-xl-3 col-lg-2">
                  <Link to="/addIssue">
                    <ion-icon name="add-outline"></ion-icon>
                  </Link>
                </div>
                <div className="col-lg-8 align-self-center">
                  <Link to="/addIssue" className="navTitleLink">
                    <span className="navTitle">{data ? "" : "Add Issue"}</span>
                  </Link>
                </div>
              </div>
            </div>
            <hr />

            <div className="col-12">
              <div className="row justify-content-around offset-xl-1">
                <div className="col-xl-3 col-lg-2">
                  <Link to="/profile">
                    <ion-icon name="person-outline"></ion-icon>
                  </Link>
                </div>
                <div className="col-lg-8 align-self-center">
                  <Link to="/profile" className="navTitleLink">
                    <span className="navTitle">
                      {data ? "" : "View Profile"}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="row justify-content-around offset-xl-1 mt-1">
                <div className="col-xl-3 col-lg-2 logout">
                  <ion-icon
                    name="log-out-outline"
                    onClick={() => logout()}
                  ></ion-icon>
                </div>
                <div className="col-lg-8 align-self-center logout ">
                  <span className="navTitle" onClick={() => logout()}>
                    {data ? "" : "Logout"}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ height: "60vh" }}></div>
            <div className="col-12  p-auto" style={{ height: "6vh" }}>
              <div className="row justify-content-around offset-xl-1 my-auto">
                <div className="col-xl-3 col-lg-2">
                  <Link to="/login" className="logout">
                    <ion-icon name="log-in-outline"></ion-icon>
                  </Link>
                </div>
                <div className="col-lg-8 align-self-center">
                  <Link to="/login" className="navTitleLink ">
                    <span className="navTitle">{data ? "" : "Login"}</span>
                  </Link>
                </div>
              </div>
              <div className="row justify-content-around offset-xl-1 my-auto">
                <div className="col-xl-3 col-lg-2">
                  <Link to="/register" className="logout">
                    <ion-icon name="person-add-outline"></ion-icon>
                  </Link>
                </div>
                <div className="col-lg-8 align-self-center">
                  <Link to="/register" className="navTitleLink ">
                    <span className="navTitle">{data ? "" : "Register"}</span>
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

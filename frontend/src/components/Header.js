import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bar } from "../redux/action/cssAction";
import { getProfile } from "../redux/action/userAction";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.cssData);
  let [date, setDate] = useState(new Date());
  let [wish, setWish] = useState("");
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
    var curHr = date.getHours();
    if (curHr < 12) {
      setWish("Morning");
    } else if (curHr < 18) {
      setWish("Afternoon");
    } else {
      setWish("Evening");
    }
  });
  const login = localStorage.getItem("eMail");
  const fName = localStorage.getItem("fName");
  const toggle = () => {
    data ? dispatch(bar(0)) : dispatch(bar(1));
  };
  const logout = () => {
    if (window.confirm("Do you want to logout from this page")) {
      localStorage.clear();
      navigate("/logout");
    }
  };

  return (
    <>
      <div className="row sticky-top">
        <div className="col-sm-1 d-inline">
          <ion-icon
            name="menu-outline"
            className="d-inline"
            onClick={(e) => {
              toggle(e);
            }}
          ></ion-icon>
        </div>
        <div className="col-sm-2 ">
          <div className="row">
            <div className="col-sm-1 align-self-center">
              <ion-icon
                className="align-self-center"
                name="logo-apple-ar"
              ></ion-icon>
            </div>
            <div className="offset-sm-1 col-sm-3 align-self-center">Brand</div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-3 offset-lg-1 offset-md-0  align-self-center ">
          Good {wish} {fName ? fName : "Guest"}
        </div>
        <div className=" col-lg-3 col-md-4 align-self-center ">
          <div className="row  flex-row-reverse ">
            <div className="col-md-10 col-sm-12 float-right pl-lg-5   d-md-block d-sm-none">
              {date.toLocaleDateString("es-CL")} [ {date.toLocaleTimeString()} ]
            </div>
          </div>
        </div>
        <div className=" col-lg-2 col-md-1 offset-md-1order-last align-self-center ">
          {login ? (
            <>
              <div className="row justify-content-end ">
                <div className="col-md-1 ">
                  <Link to="/profile">
                    <ion-icon name="person-circle-outline"></ion-icon>
                  </Link>
                </div>
                <div
                  className="offset-2 col-md-4 logout"
                  onClick={() => logout()}
                >
                  <ion-icon name="log-out-outline"></ion-icon>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row justify-content-end ">
                <div className="col-md-4">
                  <Link to="/login">
                    <ion-icon name="log-in-outline"></ion-icon>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

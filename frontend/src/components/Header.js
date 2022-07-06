import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bar } from "../redux/action/cssAction";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.cssData);
  const fName = "Gest";
  const wish = "Morning";
  const join = "12 Wed 2022 23:02:12";
  // const { token, eMail, status } = useSelector((state) => state.userData);
  const login = localStorage.getItem("eMail");
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
        <div className="col-sm-2">
          <div className="row">
            <div className="col-sm-1">
              <ion-icon name="logo-apple-ar"></ion-icon>
            </div>
            <div className="offset-sm-1 col-sm-3">Brand</div>
          </div>
        </div>
        <div className=" col-md-2 offset-lg-2   offset-md-0  ">
          Good {wish} {fName}
        </div>
        <div className=" col-lg-3 col-md-4 ">
          <div className="row  flex-row-reverse">
            <div className="col-md-10 col-sm-12 float-right pl-5 d-md-block d-sm-none">
              {join}
            </div>
          </div>
        </div>
        <div className=" col-md-2 order-last">
          {login ? (
            <>
              <div className="row justify-content-end ">
                <div className="col-md-1">
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

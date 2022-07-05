import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bar } from "../redux/action/cssAction";

export default function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cssData);
  const toggle = () => {
    data === 0 ? dispatch(bar(1)) : dispatch(bar(0));
  };
  return (
    <>
      <div className="row" style={{ border: "1px solid red" }}>
        <div className="col-sm-1 d-inline" style={{ border: "1px solid blue" }}>
          <ion-icon
            name="menu-outline"
            className="d-inline"
            onClick={(e) => {
              toggle(e);
            }}
          ></ion-icon>
        </div>
        <div className="col-sm-2" style={{ border: "1px solid blue" }}>
          <div className="row">
            <div className="col-sm-1">
              <ion-icon name="logo-apple-ar"></ion-icon>
            </div>
            <div className="col-sm-3">Brand</div>
          </div>
        </div>
        <div
          className=" col-md-2 offset-lg-2   offset-md-0  "
          style={{ border: "1px solid green" }}
        >
          Good Morning Vishnu
        </div>
        <div
          className=" col-lg-3 col-md-4 "
          style={{ border: "1px solid yellow" }}
        >
          <div
            className="row  flex-row-reverse"
            style={{ border: "2px solid green" }}
          >
            <div
              className="col-md-10 col-sm-12 float-right pl-5 d-md-block d-sm-none"
              style={{ border: "2px solid red" }}
            >
              12 Wed 2022 23:02:12
            </div>
          </div>
        </div>
        <div
          className="offset-0 col-md-2 order-last"
          style={{ border: "1px solid blue" }}
        >
          <div className="row justify-content-end ">
            <div className="col-md-1">
              <ion-icon name="person-circle-outline"></ion-icon>
            </div>
            <div className="col-md-4">
              <ion-icon name="log-out-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

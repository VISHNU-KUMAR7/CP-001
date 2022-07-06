import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const wish = "night";
  return (
    <>
      <div className="row  h-100 ">
        <div className="col-lg-4 offset-lg-3 offset-md-4 col-md-5 offset-sm-3 col-sm-7 align-self-center   d-inline-block p-0  border border-dark border-4 rounded ">
          <div className="row align-items-baseline  m-lg-5">
            <div className=" float-right my-3" style={{ fontSize: "22px" }}>
              All done! Have a nice {wish}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6  ">
              A bit more to do?{" "}
            </div>
            <div className="col-md-2 col-sm-6 align-self-baseline ">
              <button
                className="btn btn-danger"
                onClick={(e) => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

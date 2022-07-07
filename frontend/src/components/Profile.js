import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../redux/action/userAction";

export default function Profile() {
  // const phoneNo = "2334563456";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fName, lName, join, eMail, location, phoneNo } = useSelector(
    (state) => state.userData
  );
  // join = join.substring(0, 9);
  useEffect(() => {
    dispatch(getProfile({ eMail: localStorage.getItem("eMail") }));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center mt-5 pt-5 border border-dark border-4 rounded rounded-2">
            <h3
              className="col-md-12"
              style={{ textAlign: "left", color: "#FF5349" }}
            >
              Profile
            </h3>
            <hr />
            <div
              className="col-md-10 m-auto"
            >
              <img
                className="w-50 h-50 offset-3"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt="John"
                style={{ width: "100%" }}
              />
            </div>
            <div
              className="col-md-10 m-auto"
            >
              <div className="row m-auto">
                <div className="col-md-10 offset-md-2 ">
                  <h1>
                    {fName} {lName}
                  </h1>
                  <p>Email: {eMail}</p>
                  <p>Phone: {phoneNo}</p>
                  <p>Location: {location}</p>
                  <p>Date of Joining: {join}</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-10 m-auto "
            >
              <div className="row justify-content-evenly">
                <div className="col-3 mb-2">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      borderColor: "#FF5349",
                      color: "#FF5349",
                    }}
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Back
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="Submit"
                    className="btn"
                    style={{
                      backgroundColor: "#FF5349",
                      borderColor: "#FF5349",
                      color: "white",
                    }}
                    onClick={() => navigate("/")}
                  >
                    Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

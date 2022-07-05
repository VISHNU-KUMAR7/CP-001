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

  return (<>
   
    <div className="row flex-column " style={{ border: "1px solid black" }}>
      <div className="col-md-5 m-auto" style={{ border: "1px solid blue" }}>
        <img
        className="w-50 h-50 offset-3"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="John"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-5 m-auto" style={{ border: "1px solid blue" }}>
        <div className="row m-auto" style={{ border: "1px solid red" }}>
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
      <div className="col-md-5 m-auto " style={{ border: "1px solid blue" }}>
        <div className="row justify-content-evenly">
          <div className="col-3">
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
          <div className="col-3">
            <button onClick={() => navigate("/")}>DashBoard</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

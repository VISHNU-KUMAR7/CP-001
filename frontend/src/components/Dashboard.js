import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const logout = (e) => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div>Dashboard</div>
      <button className="btn btn-danger" onClick={(e) => logout(e)}>
        Logout
      </button>
    </>
  );
}

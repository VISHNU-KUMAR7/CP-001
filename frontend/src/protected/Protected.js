import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export function ProtectUser(props) {
  const token = localStorage.getItem("token");
  const eMail = localStorage.getItem("eMail");
  const navigate = useNavigate();
  let Cmp = props.Cmp;
  useEffect(() => {
    if (eMail === null && token === null) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Cmp />
    </>
  );
}
export function ProtectLoginRegister(props) {
  const token = localStorage.getItem("token");
  const eMail = localStorage.getItem("eMail");
  const navigate = useNavigate();
  let Cmp = props.Cmp;
  useEffect(() => {
    if (eMail !== null && token !== null) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Cmp />
    </>
  );
}

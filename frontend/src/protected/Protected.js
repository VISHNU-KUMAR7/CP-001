import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function ProtectUser(props) {
  const navigate = useNavigate();
  let Cmp = props.Cmp;
  useEffect(() => {
    const token = localStorage.getItem("token");
    const eMail = localStorage.getItem("eMail");
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
  const navigate = useNavigate();
  let Cmp = props.Cmp;
  useEffect(() => {
    const eMail = localStorage.getItem("eMail");
    const token = localStorage.getItem("token");
    if (eMail === null && token === null) {
      console.log(eMail, token);
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Cmp />
    </>
  );
}

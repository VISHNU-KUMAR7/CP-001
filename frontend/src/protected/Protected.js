import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  const navigate = useNavigate();
  let Cmp = props.Cmp;
  let login = "";
  useEffect(() => {
    if (login !== "login") {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Cmp />
    </>
  );
}

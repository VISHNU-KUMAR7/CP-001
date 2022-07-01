import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action/userAction";

export default function Login() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.userData);
  const data = "login";
  return (
    <>
      Login<button onClick={() => dispatch(login(data))}>Login</button>
      <span>{result}</span>
    </>
  );
}

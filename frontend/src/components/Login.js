import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/userAction";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <>
      Login<button onClick={() => dispatch(login())}>Login</button>
    </>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action/userAction";

export default function Login() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.userData);
  useEffect(() => {
    dispatch(login());
  }, []);

  return (
    <>
      Login<button>Login</button>
      <span>
        {results.map((data) => {
          return <div>{data.id}</div>;
        })}
      </span>
    </>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue } from "../redux/action/issueAction";

export default function ViewIssue() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.issueData);
  console.log("result from viewIssue", result);
  useEffect(() => {
    dispatch(getIssue("Holly@Dolly.com"));
    // return () => {
    //   second;
    // };
  }, []);
  return (
    <>
      <div>ViewIssue</div>
      {result.map((data) => {
        return <span key={data._id}>{data.date}</span>;
      })}
    </>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue, getIssueBySearch } from "../redux/action/issueAction";

export default function ViewIssue() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.issueData);
  console.log("result from viewIssue", result);
  useEffect(() => {
    dispatch(getIssue("Holly@Dolly.com"));
  }, []);
  useEffect(() => {});
  const searchText = (e) => {
    // eMail, searchItem, skip, limit
    dispatch(getIssueBySearch({searchItem:e.target.value,eMail:"Holly@Dolly.com",skip:0,limit:5}));
    console.log(e.target.value);
  };

  return (
    <>
      <div>ViewIssue</div>
      <input type={"text"} onChange={(e) => searchText(e)} />
      {result.map((data) => {
        return <span key={data._id}>{data.date}</span>;
      })}
    </>
  );
}

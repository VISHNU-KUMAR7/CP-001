import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue, getIssueBySearch } from "../redux/action/issueAction";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function ViewIssue() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.issueData);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimitPage] = useState(10);
  const eMail = localStorage.getItem("eMail");

  useEffect(() => {
    dispatch(getIssue({ eMail, limit, skip: currentPage * limit }));
  }, [limit]);
  const searchText = (e) => {
    if (e.target.value.length !== 0) {
      dispatch(
        getIssueBySearch({
          searchItem: e.target.value,
          eMail,
          skip: currentPage * limit,
          limit,
        })
      );
    } else {
      dispatch(getIssue({ eMail, limit, skip: currentPage * limit }));
    }
  };

  const handleLimitClick = (e) => {
    setLimitPage(parseInt(e.target.value));
    console.log(parseInt(e.target.value));
  };

  const handlePageClick = async (data) => {
    setCurrentPage(data.selected);
    dispatch(getIssue({ eMail, limit, skip: data.selected * limit }));
  };

  return (
    <>
      <div>ViewIssue</div>
      {/* searchItem */}
      <input type={"text"} onChange={(e) => searchText(e)} />
      {/* view card/Issue */}
      {result.map(({ description, severity, status, _id }) => (
        <Card
          key={_id}
          _id={_id}
          description={description}
          severity={severity}
          status={status}
        />
      ))}
      {/* dropDown */}
      <select
        name="limit"
        id="limit"
        onChange={(e) => {
          handleLimitClick(e);
        }}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      {/* <Pagination /> */}
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={23}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}

export function Pagination() {
  return <></>;
}

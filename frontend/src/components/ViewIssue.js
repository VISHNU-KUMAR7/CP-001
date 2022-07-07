import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue, getIssueBySearch } from "../redux/action/issueAction";
import ReactPaginate from "react-paginate";
// import { useLocation } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./Card";
import Table from "./Table";

export default function ViewIssue() {
  // const location = useLocation();
  // console.log(location);
  // if (location.state && location.state.toast === "Update data sucessfully") {
  //   toast(location.state.toast);
  // }
  const dispatch = useDispatch();
  const result = useSelector((state) => state.issueData);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimitPage] = useState(10);
  const eMail = localStorage.getItem("eMail");
  const [cardTable, setCardTable] = useState(0);
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

  const toggle = () => {
    if (cardTable === 0) {
      setCardTable(1);
    } else {
      setCardTable(0);
    }
    // console.log(cardTable);
  };

  return (
    <>
      {/* searchItem */}
      {/* <ToastContainer /> */}
      <div className="row border border-info border-1 rounded my-3 mx-1 py-1 align-items-baseline">
        <div className="col-md-2">View Issue</div>
        <div className="col-md-4">
          <input
            className="w-100"
            type={"text"}
            placeholder="Search by text"
            onChange={(e) => searchText(e)}
          />
        </div>
        <div className="col-md-6">
          <div className="row justify-content-end">
            <div className="col-lg-2 col-md-3 p-0  ">
              <button className="btn btn-danger ">Delete</button>
            </div>
            <div className="col-lg-2  col-md-4 p-0 m-0 ">
              <button className="btn btn-success">Add Issue</button>
            </div>
            <div className="col-lg-1 col-md-2">
              {cardTable ? (
                <>
                  <ion-icon
                    name="apps-outline"
                    onClick={() => {
                      toggle();
                    }}
                  ></ion-icon>
                </>
              ) : (
                <>
                  <ion-icon
                    name="list-outline"
                    onClick={() => {
                      toggle();
                    }}
                  ></ion-icon>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* view card/Issue */}
      <div className="row border border-danger border-2 rounded mx-1  justify-content-center align-content-between">
        {cardTable ? (
          <>
            {result.map(({ description, severity, status, _id }) => (
              <Card
                key={_id}
                _id={_id}
                description={description}
                severity={severity}
                status={status}
              />
            ))}
          </>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Severity</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {result.map(({ description, severity, status, _id }) => (
                  <Table
                    key={_id}
                    _id={_id}
                    description={description}
                    severity={severity}
                    status={status}
                  />
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      {/* dropDown */}
      <select
        name="limit"
        className=""
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

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue, getIssueBySearch } from "../redux/action/issueAction";
import ReactPaginate from "react-paginate";
import "react-toastify/dist/ReactToastify.css";
import Card from "./Card";
import Table from "./Table";
import { Link } from "react-router-dom";
import { getTotalIssueByUser } from "../redux/action/userAction";

export default function ViewIssue() {
  const dispatch = useDispatch();
  const issueData = useSelector((state) => state.issueData);
  const [result, setResult] = useState([]);
  useEffect(() => {
    issueData.length !== 0 ? setResult(issueData) : <></>;
  }, [issueData]);

  const { totIssues } = useSelector((state) => state.userData);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimitPage] = useState(10);
  const eMail = localStorage.getItem("eMail");
  const cat = localStorage.getItem("cat");
  const [cardTable, setCardTable] = useState(0);
  const [pageCount, setPageCount] = useState(3);

  useEffect(() => {
    dispatch(getTotalIssueByUser({ eMail, cat }));
    setPageCount(Math.ceil(totIssues / limit));
  }, [totIssues]);

  useEffect(() => {
    dispatch(getIssue({ eMail, cat, limit, skip: currentPage * limit }));
    setPageCount(Math.ceil(totIssues / limit));
  }, [limit]);
  const searchText = (e) => {
    if (e.target.value.length !== 0) {
      dispatch(
        getIssueBySearch({
          searchItem: e.target.value,
          cat,
          eMail,
          skip: currentPage * limit,
          limit,
        })
      );
    } else {
      dispatch(getIssue({ eMail, cat, limit, skip: currentPage * limit }));
    }
  };

  const handleLimitClick = (e) => {
    setLimitPage(parseInt(e.target.value));
    setPageCount(Math.ceil(totIssues / parseInt(e.target.value)));
    dispatch(
      getIssue({
        eMail,
        cat,
        limit: parseInt(e.target.value),
        skip: currentPage * parseInt(e.target.value),
      })
    );
  };

  const handlePageClick = async (data) => {
    setCurrentPage(data.selected);
    dispatch(getIssue({ eMail, cat, limit, skip: data.selected * limit }));
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
              <Link to="/delete">
                {" "}
                <button className="btn btn-danger ">Delete</button>
              </Link>
            </div>
            <div className="col-lg-2  col-md-4 p-0 m-0 ">
              <Link to="/addIssue">
                <button className="btn btn-success">Add Issue</button>
              </Link>
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
            {result.map(({ description, eMail, severity, status, _id }) => (
              <Card
                key={_id}
                _id={_id}
                description={description}
                severity={severity}
                status={status}
                eMail={eMail}
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
                  {cat === "admin" ? <th scope="col">UserId</th> : ""}
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {result.map(({ description, eMail, severity, status, _id }) => (
                  <Table
                    key={_id}
                    _id={_id}
                    description={description}
                    severity={severity}
                    status={status}
                    eMail={eMail}
                  />
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      {/* dropDown */}
      <div className="row justify-content-center mt-md-1">
        <div className="col-md-1 m-0 p-0 col-sm-4">
          {" "}
          <select
            name="limit"
            id="limit"
            class="form-select"
            onChange={(e) => {
              handleLimitClick(e);
            }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="col-md-2 m-0 p-0 col-sm-4">
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            pageCount={pageCount}
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
        </div>
      </div>

      {/* <Pagination /> */}
    </>
  );
}

export function Pagination() {
  return <></>;
}

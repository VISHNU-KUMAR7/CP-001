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
  const [filterBtn, setFilterBtn] = useState("");
  const [idCol, setidCol] = useState("");
  const [descCol, setdescCol] = useState("");
  const [severityCol, setseverityCol] = useState("");
  const [statusCol, setstatusCol] = useState("");
  const [emailCol, setemailCol] = useState("");
  const [pageCount, setPageCount] = useState(3);
  const [checkAll, setCheckAll] = useState("");

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
      setFilterBtn("d-none");
    } else {
      setCardTable(0);
      setFilterBtn("");
    }
    // console.log(cardTable);
  };
  const hideCol = (e) => {
    if (e.target.id === "1") {
      if (idCol === "") {
        setidCol("d-none");
      } else {
        setidCol("");
      }
    } else if (e.target.id === "2") {
      if (descCol === "") {
        setdescCol("d-none");
      } else {
        setdescCol("");
      }
    } else if (e.target.id === "3") {
      if (severityCol === "") {
        setseverityCol("d-none");
      } else {
        setseverityCol("");
      }
    } else if (e.target.id === "4") {
      if (statusCol === "") {
        setstatusCol("d-none");
      } else {
        setstatusCol("");
      }
    } else if (e.target.id === "5") {
      if (emailCol === "") {
        setemailCol("d-none");
      } else {
        setemailCol("");
      }
    }
  };

  return (
    <>
      <div className="row border border-info border-1 rounded my-3 mx-1 py-1 align-items-baseline">
        <div className="col-md-2">View Issue</div>
        <div className="col-md-4 border border-0 rounded">
          <input
            className="w-100 border border-0 rounded p-1"
            type={"text"}
            placeholder="Search by text"
            onChange={(e) => searchText(e)}
          />
        </div>
        <div className="col-md-6">
          <div className="row justify-content-end">
            <div className={`col-lg-2 ${filterBtn}`}>
              <div className="dropdown ">
                <button
                  className="btn btn-primary dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </button>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="px-2">
                    <input type="checkbox" id="1" onClick={(e) => hideCol(e)} />
                    Id
                  </li>
                  <li className="px-2">
                    <input type="checkbox" id="2" onClick={(e) => hideCol(e)} />
                    Description
                  </li>
                  <li className="px-2">
                    <input type="checkbox" id="3" onClick={(e) => hideCol(e)} />
                    Severity
                  </li>
                  <li className="px-2">
                    <input type="checkbox" id="4" onClick={(e) => hideCol(e)} />
                    Status
                  </li>
                  {cat === "admin" ? (
                    <li className="px-2">
                      <input
                        type="checkbox"
                        id="5"
                        onClick={(e) => hideCol(e)}
                      />
                      UserId
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 p-0  ">
              <Link to="/delete">
                {" "}
                <button className="btn btn-danger " disabled="disabled">
                  Delete
                </button>
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
      <div className="row  mx-1  justify-content-center align-content-between">
        {cardTable ? (
          // card view
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
          // table view
          <>
            <table className="table text-white  ">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onClick={() =>
                        checkAll === ""
                          ? setCheckAll("checked")
                          : setCheckAll("")
                      }
                    />
                  </th>
                  <th scope="col" className={`${idCol}`}>
                    Id
                  </th>
                  <th scope="col" className={`${descCol}`}>
                    Description
                  </th>
                  <th scope="col" className={`${severityCol}`}>
                    Severity
                  </th>
                  <th scope="col" className={`${statusCol}`}>
                    Status
                  </th>
                  {cat === "admin" ? (
                    <th scope="col" className={`${emailCol}`}>
                      UserId
                    </th>
                  ) : (
                    ""
                  )}
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {result.map(({ description, eMail, severity, status, _id }) => (
                  <Table
                    key={_id}
                    _id={_id}
                    check={checkAll}
                    description={description}
                    severity={severity}
                    status={status}
                    eMail={eMail}
                    idCol={idCol}
                    descCol={descCol}
                    severityCol={severityCol}
                    statusCol={statusCol}
                    emailCol={emailCol}
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
            className="form-select"
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

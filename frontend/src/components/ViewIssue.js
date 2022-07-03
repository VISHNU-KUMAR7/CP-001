import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue, getIssueBySearch } from "../redux/action/issueAction";
import ReactPaginate from "react-paginate";

export default function ViewIssue() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.issueData);
  const [currentPage, setCurrentPage] = useState(0);
  const eMail = localStorage.getItem("eMail");

  const limit = 10; // this will be dynamic by drop-down
  useEffect(() => {
    dispatch(getIssue({ eMail, limit, skip: currentPage * limit }));
  }, []);
  useEffect(() => {});
  const searchText = (e) => {
    // eMail, searchItem, skip, limit
    console.log(e.target.value.length);
    if (e.target.value.length !== 0) {
      dispatch(
        getIssueBySearch({
          searchItem: e.target.value,
          eMail,
          skip: 0,
          limit,
        })
      );
    } else {
      dispatch(getIssue({ eMail, limit, skip: currentPage * limit }));
    }
  };

  const handlePageClick = async (data) => {
    setCurrentPage(data.selected);
    dispatch(getIssue({ eMail, limit, skip: data.selected * limit }));
  };

  return (
    <>
      <div>ViewIssue</div>
      <input type={"text"} onChange={(e) => searchText(e)} />
      {result.map((data) => {
        return (
          <>
            <div className="card" style={{ width: "20rem" }} key={data._id}>
              <div className="card-body">
                <h5 className="card-title">Issue ID </h5>
                <h6 className="card-subtitle mb-2 text-muted">{data._id}</h6>
                <p className="card-text">{data.description}</p>

                <h6 className="card-title">Severity:</h6>
                <span>{data.severity}</span>
                <h6 className="card-title">Status:</h6>
                <span>{data.status}</span>
                <a href="#" className="card-link">
                  <ion-icon name="create-outline"></ion-icon>
                </a>
                <a href="#" className="card-link">
                  <ion-icon name="trash-outline"></ion-icon>
                </a>
              </div>
            </div>
          </>
        );
      })}
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

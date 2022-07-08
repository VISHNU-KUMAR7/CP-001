import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { ProtectUser } from "../protected/Protected";
const Dashboard = lazy(() => import("../components/Dashboard"));
const EditIssue = lazy(() => import("../components/EditIssue"));
const AddIssue = lazy(() => import("../components/AddIssue"));
const ViewIssue = lazy(() => import("../components/ViewIssue"));
const DetailIssue = lazy(() => import("../components/DetailIssue"));
const Register = lazy(() => import("../components/Register"));
const Login = lazy(() => import("../components/Login"));
const Logout = lazy(() => import("../components/Logout"));
const Profile = lazy(() => import("../components/Profile"));
const Help = lazy(() => import("../components/Help"));
const NotFound = lazy(() => import("../components/NotFound"));

export default function RoutesFun() {
  const data = useSelector((state) => state.cssData);
  let toggle = data ? "col-sm-11" : "col-sm-10";
  return (
    <>
      <Header />
      <div className="row">
        <Navbar />
        <div className={`border border-danger rounded body  ${toggle}`}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={Dashboard} />
                </Suspense>
              }
            />
            <Route
              path="/editIssue"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={EditIssue} />
                </Suspense>
              }
            />
            <Route
              path="/addIssue"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={AddIssue} />
                </Suspense>
              }
            />
            <Route
              path="/viewIssue"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={ViewIssue} />
                </Suspense>
              }
            />
            <Route
              path="/detailIssue/:_id"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={DetailIssue} />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={Register} />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={Login} />
                </Suspense>
              }
            />
            <Route
              path="/logout"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <Logout />
                  {/* <ProtectLoginRegister Cmp={Logout} /> */}
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={Profile} />
                </Suspense>
              }
            />
            <Route
              path="/help"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={Help} />
                </Suspense>
              }
            />
            <Route
              path="/*"
              element={
                <Suspense fallback={<span>Please Wait....</span>}>
                  {" "}
                  <ProtectUser Cmp={NotFound} />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

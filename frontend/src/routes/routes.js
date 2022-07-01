import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("../components/Dashboard"));
const EditIssue = lazy(() => import("../components/EditIssue"));
const AddIssue = lazy(() => import("../components/AddIssue"));
const ViewIssue = lazy(() => import("../components/ViewIssue"));
const DetailIssue = lazy(() => import("../components/DetailIssue"));
const Register = lazy(() => import("../components/Register"));
const Login = lazy(() => import("../components/Login"));
const Profile = lazy(() => import("../components/Profile"));
const Help = lazy(() => import("../components/Help"));
const About = lazy(() => import("../components/About"));

export default function routes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/editIssue"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <EditIssue />
            </Suspense>
          }
        />
        <Route
          path="/addIssue"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <AddIssue />
            </Suspense>
          }
        />
        <Route
          path="/viewIssue"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <ViewIssue />
            </Suspense>
          }
        />
        <Route
          path="/detailIssue"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <DetailIssue />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="/help"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <Help />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense fallback={<span>Please Wait....</span>}>
              {" "}
              <About />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

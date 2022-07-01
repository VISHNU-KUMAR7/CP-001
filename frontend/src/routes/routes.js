import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import EditIssue from "../components/EditIssue";
import AddIssue from "../components/AddIssue";
import ViewIssue from "../components/ViewIssue";
import DetailIssue from "../components/DetailIssue";
import Register from "../components/Register";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Help from "../components/Help";
import About from "../components/About";

export default function routes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/editIssue" element={<EditIssue />} />
        <Route path="/addIssue" element={<AddIssue />} />
        <Route path="/viewIssue" element={<ViewIssue />} />
        <Route path="/detailIssue" element={<DetailIssue />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

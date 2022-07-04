import React from "react";
import { useLocation } from "react-router-dom";
import AddIssue from "./AddIssue";

export default function EditIssue() {
  const location = useLocation();

  const data = location.state;

  return (
    <>
      <AddIssue data={data} />
    </>
  );
}

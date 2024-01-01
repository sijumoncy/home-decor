"use client";
import useAdminContext from "@/context/adminContext";
import React from "react";

function AdminHome() {
  const { currentMenu } = useAdminContext();

  console.log({ currentMenu });

  return <div>AdminHome : {currentMenu}</div>;
}

export default AdminHome;

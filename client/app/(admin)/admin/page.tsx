"use client";
import ManageCustomer from "@/components/Admin/customer/ManageCustomer";
import AdminDashboard from "@/components/Admin/dashboard/AdminDashboard";
import ManageOrder from "@/components/Admin/order/ManageOrder";
import ManageProduct from "@/components/Admin/product/ManageProduct";
import useAdminContext from "@/context/adminContext";
import React from "react";

const Components:{[key:string] : () => React.JSX.Element} = {
  product : ManageProduct,
  customer : ManageCustomer,
  order : ManageOrder,
  dashboard : AdminDashboard
}

function AdminHome() {
  const { currentMenu } = useAdminContext();
  console.log({currentMenu});
  
  const Component = Components[currentMenu.toLowerCase()]
  return currentMenu ? <Component/> : <></>
}

export default AdminHome;

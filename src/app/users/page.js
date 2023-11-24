"use client"
import { useState, useContext, useEffect } from "react"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi.js"
import DASHBOARD_DEFAULTS from "@/app/constant/dashboardConstants.js"
import { subNavConst } from "@/app/constant/subNavConstants"
import SubNavbar from "../components/subNavbar"
import Card from "@/app/components/cards"
import StaffTableContainer from "../components/staffTableContainer"

const Users = () => {
  const { processGetAllStaff, staffList } = useContext(StaffApiData)
  useEffect(() => {
    processGetAllStaff()
  }, [])

  return (
    <>
      <SubNavbar Label={subNavConst.user.label} URL={subNavConst.user.link} />
      <StaffTableContainer staffInfo={staffList} />
    </>
  )
}
export default Users

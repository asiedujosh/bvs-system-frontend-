"use client"
import { useState, useContext, useEffect } from "react"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi.js"
import DASHBOARD_DEFAULTS from "@/app/constant/dashboardConstants.js"
import { subNavConst } from "@/app/constant/subNavConstants"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"
import SubNavbar from "../components/subNavbar"
import Card from "@/app/components/cards"
import StaffTableContainer from "../components/staffTableContainer"

const Users = () => {
  const { processGetAllStaff, staffList } = useContext(StaffApiData)
  const { singleClientPermission } = useContext(AccessControlData)

  useEffect(() => {
    processGetAllStaff()
  }, [])

  return (
    <>
      {singleClientPermission &&
        singleClientPermission.singleClientPermission.create !== 0 && (
          <SubNavbar
            Label={subNavConst.user.label}
            URL={subNavConst.user.link}
          />
        )}

      <StaffTableContainer staffInfo={staffList} />
    </>
  )
}
export default Users

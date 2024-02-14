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
  const { singleUserPermission } = useContext(AccessControlData)

  useEffect(() => {
    processGetAllStaff()
  }, [])

  return (
    <>
      {singleUserPermission ? (
        singleUserPermission.singleUserPermission.create !== 0 && (
          <SubNavbar
            Label={subNavConst.user.label}
            URL={subNavConst.user.link}
          />
        )
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-between md:py-24">
          <div className="flex items-center justify-center h-1/2 mt-32">
            <div className="animate-pulse bg-gray-200 p-6 rounded-md shadow-md">
              <div className="h-8 bg-gray-300 w-full mb-4">
                <h6>Bvs System is Loading..................</h6>
              </div>
            </div>
          </div>
        </main>
      )}

      <StaffTableContainer staffInfo={staffList} />
    </>
  )
}
export default Users

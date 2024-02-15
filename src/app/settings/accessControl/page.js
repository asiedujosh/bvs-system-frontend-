"use client"
import { useState, useContext, useEffect } from "react"
import AddRole from "@/app/settings/accessControl/addRole"
import AddPermission from "@/app/settings/accessControl/addPermission"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"
import SettingSubHeader from "@/app/components/settingSubHeader"
import DeletePermission from "./deletePermission"

const AccessControl = () => {
  const {
    processGetAllClientPermission,
    processGetAllCompanyPermission,
    processGetAllPackagePermission,
    processGetAllUserPermission,
    processGetAllProductPermission,
    clientPermission,
    companyPermission,
    packagePermission,
    userPermission,
    productPermission,
  } = useContext(AccessControlData)
  useEffect(() => {
    processGetAllClientPermission()
  }, [])

  useEffect(() => {
    processGetAllCompanyPermission()
  }, [clientPermission])

  useEffect(() => {
    processGetAllPackagePermission()
  }, [companyPermission])

  useEffect(() => {
    processGetAllUserPermission()
  }, [packagePermission])

  useEffect(() => {
    processGetAllProductPermission()
  }, [userPermission])

  const displayInfo = () => {
    const allPermissionsLoaded =
      clientPermission !== null &&
      companyPermission !== null &&
      packagePermission !== null &&
      userPermission !== null &&
      productPermission !== null

    if (allPermissionsLoaded) {
      return (
        <>
          <SettingSubHeader />
          <div className="checkPoint2 overflow-y-auto">
            <AddRole />
            <AddPermission />
            <DeletePermission />
          </div>
        </>
      )
    } else {
      // Show loading message
      return (
        <main className="flex min-h-screen flex-col items-center justify-between md:py-24">
          <div className="flex items-center justify-center h-1/2 mt-32">
            <div className="animate-pulse bg-gray-200 p-6 rounded-md shadow-md">
              <div className="h-8 bg-gray-300 w-full mb-4">
                <h6>Bvs System is Loading...</h6>
              </div>
            </div>
          </div>
        </main>
      )
    }
  }

  // Call the displayInfo function directly in the return statement
  return displayInfo()
}

export default AccessControl

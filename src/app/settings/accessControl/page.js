"use client"
import { useState, useContext, useEffect } from "react"
import AddRole from "@/app/settings/accessControl/addRole"
import AddPermission from "@/app/settings/accessControl/addPermission"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"
import SettingSubHeader from "@/app/components/settingSubHeader"
import DeletePermission from "./deletePermission"

const AccessControl = () => {
  const {
    processGetAllRole,
    processGetAllClientPermission,
    processGetAllCompanyPermission,
    processGetAllPackagePermission,
    processGetAllUserPermission,
  } = useContext(AccessControlData)
  useEffect(() => {
    processGetAllRole()
    processGetAllClientPermission()
    processGetAllCompanyPermission()
    processGetAllPackagePermission()
    processGetAllUserPermission()
  }, [])
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
}

export default AccessControl

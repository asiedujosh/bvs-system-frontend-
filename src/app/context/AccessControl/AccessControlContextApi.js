"use client"
import React, { createContext, useState, useEffect } from "react"
import { notify } from "@/app/utils/responseUtils"
import { SUCCESS_STATUS } from "@/app/constant/requestConstants"
import { useRouter } from "next/navigation"
import {
  addRole,
  getAllRole,
  getAllClientPermission,
  getSingleClientPermission,
  getAllCompanyPermission,
  getSingleCompanyPermission,
  getAllPackagePermission,
  getSinglePackagePermission,
  getAllUserPermission,
  getSingleUserPermission,
  updatePermissions,
  deleteRole,
} from "./AccessControl"

export const AccessControlData = createContext()

const AccessControlDataProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [allRole, setAllRole] = useState()
  const [clientPermission, setClientPermission] = useState()
  const [companyPermission, setCompanyPermission] = useState()
  const [packagePermission, setPackagePermission] = useState()
  const [userPermission, setUserPermission] = useState()
  const [singleClientPermission, setSingleClientPermission] = useState()
  const [singleCompanyPermission, setSingleCompanyPermission] = useState()
  const [singlePackagePermission, setSinglePackagePermission] = useState()
  const [singleUserPermission, setSingleUserPermission] = useState()

  const router = useRouter()

  useEffect(() => {
    processGetAllRole()
  }, [])

  const processAddRole = async (data) => {
    let response = await addRole(data)
    if (response) {
      //setClientData(response.data.client)
      processGetAllRole()
      processGetAllClientPermission()
      processGetAllCompanyPermission()
      processGetAllPackagePermission()
      processGetAllUserPermission()
      notify(SUCCESS_STATUS)
      //router.push(`/dashboard/individual`)
    }
  }

  const processGetAllRole = async () => {
    let response = await getAllRole()
    if (response) {
      setAllRole(response.data)
    }
  }

  const processGetAllClientPermission = async () => {
    let response = await getAllClientPermission()
    if (response) {
      setClientPermission(response.data)
    }
  }

  const processGetSingleClientPermission = async (id) => {
    let response = await getSingleClientPermission(id)
    if (response) {
      setSingleClientPermission(response.data)
    }
  }

  const processGetAllCompanyPermission = async () => {
    let response = await getAllCompanyPermission()
    if (response) {
      setCompanyPermission(response.data)
    }
  }

  const processGetSingleCompanyPermission = async (id) => {
    let response = await getSingleCompanyPermission(id)
    if (response) {
      setSingleCompanyPermission(response.data)
    }
  }

  const processGetAllPackagePermission = async () => {
    let response = await getAllPackagePermission()
    if (response) {
      setPackagePermission(response.data)
    }
  }

  const processGetSinglePackagePermission = async (id) => {
    let response = await getSinglePackagePermission(id)
    if (response) {
      setSinglePackagePermission(response.data)
    }
  }

  const processGetAllUserPermission = async () => {
    let response = await getAllUserPermission()
    if (response) {
      setUserPermission(response.data)
    }
  }

  const processGetSingleUserPermission = async () => {
    let response = await getSingleUserPermission()
    if (response) {
      setSingleUserPermission(response.data)
    }
  }

  const processUpdatePermission = async (data) => {
    let response = await updatePermissions(data)
    if (response) {
      processGetAllClientPermission()
      processGetAllCompanyPermission()
      processGetAllPackagePermission()
      processGetAllUserPermission()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteRole = async (data) => {
    let response = await deleteRole(data)
    if (response) {
      processGetAllRole()
      processGetAllClientPermission()
      processGetAllCompanyPermission()
      processGetAllPackagePermission()
      processGetAllUserPermission()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <AccessControlData.Provider
      value={{
        processAddRole,
        processGetAllRole,
        isLoading,
        allRole,
        clientPermission,
        companyPermission,
        packagePermission,
        userPermission,
        processGetAllClientPermission,
        processGetAllCompanyPermission,
        processGetAllPackagePermission,
        processGetAllUserPermission,
        processUpdatePermission,
        processDeleteRole,
        processGetSingleClientPermission,
        processGetSingleCompanyPermission,
        processGetSinglePackagePermission,
        processGetSingleUserPermission,
        singleClientPermission,
        singleCompanyPermission,
        singlePackagePermission,
        singleUserPermission,
      }}
    >
      {props.children}
    </AccessControlData.Provider>
  )
}

export default AccessControlDataProvider
"use client"
import React, { createContext, useState, useEffect } from "react"
import { notify } from "@/app/utils/responseUtils"
import {
  SUCCESS_STATUS,
  URL,
  TIMEOUT,
  NOTFOUND,
  TIMEEXCEED,
  UNHANDLEERR,
} from "../../constant/requestConstants"
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
  getSingleServicePermission,
  getAllServicePermission,
  getSingleProductPermission,
  getAllProductPermission,
  updatePermissions,
  deleteRole,
} from "./AccessControl"

export const AccessControlData = createContext()

const AccessControlDataProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [allRole, setAllRole] = useState()
  const [roleLoad, setRoleLoad] = useState(true)
  const [errorStatus, setErrorStatus] = useState(false)
  const [errorInfo, setErrorInfo] = useState()
  const [clientPermission, setClientPermission] = useState(null)
  const [companyPermission, setCompanyPermission] = useState(null)
  const [packagePermission, setPackagePermission] = useState(null)
  const [userPermission, setUserPermission] = useState(null)
  const [singleClientPermission, setSingleClientPermission] = useState(null)
  const [singleCompanyPermission, setSingleCompanyPermission] = useState(null)
  const [singlePackagePermission, setSinglePackagePermission] = useState(null)
  const [singleUserPermission, setSingleUserPermission] = useState(null)
  const [servicePermission, setServicePermission] = useState(null)
  const [singleServicePermission, setSingleServicePermission] = useState(null)
  const [productPermission, setProductPermission] = useState(null)
  const [singleProductPermission, setSingleProductPermission] = useState(null)

  // const router = useRouter()

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
      processGetAllProductPermission()
      processGetAllServicePermission()
      notify(SUCCESS_STATUS)
      //router.push(`/dashboard/individual`)
    }
  }

  const processGetAllRole = async () => {
    let response = await getAllRole()
    if (response === TIMEEXCEED) {
      setRoleLoad(false)
      setErrorStatus(true)
      setErrorInfo("Network Error")
    }
    if (response === NOTFOUND) {
      setRoleLoad(false)
      setErrorStatus(true)
      setErrorInfo("There was problem")
    }
    if (response === UNHANDLEERR) {
      setRoleLoad(false)
      setErrorStatus(true)
      setErrorInfo("Unexpected Error")
    }
    if (response.data) {
      setAllRole(response.data)
      setRoleLoad(false)
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

  const processGetSingleUserPermission = async (id) => {
    let response = await getSingleUserPermission(id)
    if (response) {
      setSingleUserPermission(response.data)
    }
  }

  const processGetAllServicePermission = async () => {
    let response = await getAllServicePermission()
    if (response) {
      setServicePermission(response.data)
    }
  }

  const processGetSingleServicePermission = async (id) => {
    let response = await getSingleServicePermission(id)
    if (response) {
      setSingleServicePermission(response.data)
    }
  }

  const processGetAllProductPermission = async () => {
    let response = await getAllProductPermission()
    if (response) {
      console.log(response)
      setProductPermission(response.data)
    }
  }

  const processGetSingleProductPermission = async (id) => {
    let response = await getSingleProductPermission(id)
    if (response) {
      setSingleProductPermission(response.data)
    }
  }

  const processUpdatePermission = async (data) => {
    console.log(data)
    let response = await updatePermissions(data)
    if (response) {
      processGetAllClientPermission()
      processGetAllCompanyPermission()
      processGetAllPackagePermission()
      processGetAllUserPermission()
      processGetAllProductPermission()
      processGetAllServicePermission()
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
      processGetAllServicePermission()
      processGetAllProductPermission()
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
        servicePermission,
        productPermission,
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
        processGetAllServicePermission,
        processGetSingleServicePermission,
        processGetAllProductPermission,
        processGetSingleProductPermission,
        singleClientPermission,
        singleCompanyPermission,
        singlePackagePermission,
        singleUserPermission,
        singleServicePermission,
        singleProductPermission,
        setIsLoading,
        roleLoad,
        setRoleLoad,
        errorStatus,
        setErrorStatus,
        errorInfo,
        setErrorInfo,
      }}
    >
      {props.children}
    </AccessControlData.Provider>
  )
}

export default AccessControlDataProvider

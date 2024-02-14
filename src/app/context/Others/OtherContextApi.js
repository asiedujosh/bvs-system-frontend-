"use client"
import React, { createContext, useState } from "react"
import { useRouter } from "next/navigation"
import { notify } from "@/app/utils/responseUtils"
import {
  SUCCESS_STATUS,
  URL,
  TIMEOUT,
  NOTFOUND,
  TIMEEXCEED,
  UNHANDLEERR,
} from "../../constant/requestConstants"
import {
  addPackage,
  getAllPackage,
  searchPackageRecords,
  getPackage,
  updatePackage,
  deletePackage,
  addCompany,
  getAllCompany,
  searchCompanyRecords,
  getACompany,
  updateCompany,
  deleteCompany,
} from "./Other"

export const OtherApiData = createContext()

const OtherApiDataProvider = (props) => {
  const [packageList, setPackageList] = useState([])
  const [companyList, setCompanyList] = useState([])
  const [searchCompanyRecord, setSearchCompanyRecord] = useState(null)
  const [searchPackageRecord, setSearchPackageRecord] = useState(null)
  const [packageData, setPackageData] = useState(null)
  const [companyData, setCompanyData] = useState(null)

  const router = useRouter()

  const processAddPackage = async (data) => {
    console.log(data)
    let response = await addPackage(data)
    if (response) {
      router.push(`/dashboard/others/package`)
      notify(SUCCESS_STATUS)
    }
  }

  const processGetAllPackage = async () => {
    let response = await getAllPackage()
    if (response) {
      console.log(response)
      setPackageList(response.data.package)
    }
  }

  const processSearchPackage = async (data) => {
    let responseOnPackageSearch = await searchPackageRecords(data)
    if (responseOnPackageSearch) {
      console.log(responseOnPackageSearch)
      setSearchPackageRecord(responseOnPackageSearch.data)
    }
  }

  const processGetPackageProfile = async (id) => {
    let responseOnPackageProfile = await getPackage(id)
    console.log(responseOnPackageProfile)
    if (responseOnPackageProfile) {
      setPackageData(responseOnPackageProfile.data.packageProfile)
    }
  }

  const processViewPackageProfile = async (id) => {
    processGetPackageProfile(id)
    router.push(`/dashboard/others/package/viewProfile/${id}`)
  }

  const processViewPackageUpdateProfile = async (id) => {
    processGetPackageProfile(id)
    router.push(`/dashboard/others/package/update/${id}`)
  }

  const processUpdatePackageProfile = async (id, data) => {
    let responseOnUpdatePackage = await updatePackage(id, data)
    if (responseOnUpdatePackage) {
      notify(SUCCESS_STATUS)
      router.push(`/dashboard/others/package`)
    }
  }

  const processDeletePackage = async (id) => {
    let responseOnDeletePackage = await deletePackage(id)
    if (responseOnDeletePackage) {
      let proPackageList = packageList.filter((item) => item.id !== id)
      setPackageList(proPackageList)
      notify(SUCCESS_STATUS)
      router.push(`/dashboard/others/package`)
    }
  }

  const processAddCompany = async (data) => {
    let responseOnAddCompany = await addCompany(data)
    if (responseOnAddCompany) {
      notify(SUCCESS_STATUS)
      router.push(`/dashboard/others`)
    } else {
      console.log("Response On Company")
      return false
    }
  }

  const processGetAllCompany = async () => {
    let response = await getAllCompany()
    if (response) {
      if (response === TIMEEXCEED) {
        // setRoleLoad(false)
        // setErrorStatus(true)
        // setErrorInfo("Network Error")
        console.log("Network Error")
      }
      if (response === NOTFOUND) {
        // setRoleLoad(false)
        // setErrorStatus(true)
        // setErrorInfo("There was problem")
        console.log("Unexpected Error")
      }
      if (response === UNHANDLEERR) {
        // setRoleLoad(false)
        // setErrorStatus(true)
        // setErrorInfo("Unexpected Error")
        console.log("Unexpected Error")
      }
      if (response.data) {
        //setAllRole(response.data)
        console.log(response)
        setCompanyList(response.data.company)
      }
    }
  }

  const processSearchCompany = async () => {
    let responseOnCompanySearch = await searchCompanyRecords(data)
    if (responseOnCompanySearch) {
      setSearchCompanyRecord(responseOnCompanySearch.data)
    }
  }

  const processGetCompanyProfile = async (id) => {
    let responseOnCompanyProfile = await getACompany(id)
    if (responseOnCompanyProfile) {
      setCompanyData(responseOnCompanyProfile.data.companyProfile)
    }
  }

  const processViewCompanyProfile = async (id) => {
    processGetCompanyProfile(id)
    router.push(`/dashboard/others/company/viewProfile/${id}`)
  }

  const processViewCompanyUpdateProfile = async (id) => {
    processGetCompanyProfile(id)
    router.push(`/dashboard/others/company/update/${id}`)
  }

  const processUpdateCompanyProfile = async (id, data) => {
    let responseOnUpdateCompany = await updateCompany(id, data)
    if (responseOnUpdateCompany) {
      notify(SUCCESS_STATUS)
      router.push(`/dashboard/others`)
    }
  }

  const processDeleteCompany = async (id) => {
    let responseOnDeletePackage = await deleteCompany(id)
    if (responseOnDeletePackage) {
      let proCompanyList = companyList.filter((item) => item.id !== id)
      setCompanyList(proCompanyList)
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <OtherApiData.Provider
      value={{
        processAddPackage,
        processGetAllPackage,
        processAddCompany,
        processSearchPackage,
        processGetPackageProfile,
        processGetAllCompany,
        processGetCompanyProfile,
        processViewCompanyProfile,
        processSearchCompany,
        processUpdateCompanyProfile,
        processUpdatePackageProfile,
        processViewPackageProfile,
        processViewCompanyUpdateProfile,
        processViewPackageUpdateProfile,
        processDeleteCompany,
        processDeletePackage,
        getAllCompany,
        companyData,
        packageList,
        companyList,
        searchCompanyRecord,
        searchPackageRecord,
        packageData,
      }}
    >
      {props.children}
    </OtherApiData.Provider>
  )
}

export default OtherApiDataProvider

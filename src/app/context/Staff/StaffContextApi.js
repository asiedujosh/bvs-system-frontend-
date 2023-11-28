"use client"
import React, { createContext, useState } from "react"
import { useRouter } from "next/navigation"
import { notify } from "@/app/utils/responseUtils"
import { SUCCESS_STATUS } from "../../constant/requestConstants"
import {
  addStaff,
  getAllStaff,
  searchStaffRecords,
  getStaff,
  updateStaff,
  deleteStaff,
} from "./Staff"

export const StaffApiData = createContext()

const StaffApiDataProvider = (props) => {
  const [staffList, setStaffList] = useState([])
  const [searchStaffRecord, setSearchStaffRecord] = useState(null)
  const [staffData, setStaffData] = useState(null)

  const router = useRouter()

  const processAddStaff = async (data) => {
    console.log(data)
    let response = await addStaff(data)
    if (response) {
      notify(SUCCESS_STATUS)
      router.push(`/users`)
    }
  }

  const processGetAllStaff = async () => {
    let response = await getAllStaff()
    if (response) {
      setStaffList(response.data.user)
    }
  }

  const processSearchStaff = async (data) => {
    let responseOnStaffSearch = await searchStaffRecords(data)
    if (responseOnStaffSearch) {
      setSearchStaffRecord(responseOnStaffSearch.data)
    }
  }

  const processGetStaffProfile = async (id) => {
    let responseOnStaffProfile = await getStaff(id)
    if (responseOnStaffProfile) {
      setStaffData(responseOnStaffProfile.data.staffProfile)
    }
  }

  const processUpdateStaffProfile = async (id, data) => {
    let responseOnUpdateStaff = await updateStaff(id, data)
    if (responseOnUpdateStaff) {
      notify(SUCCESS_STATUS)
      router.push(`/dashboard/others/package`)
    }
  }

  const processDeleteStaff = async (id) => {
    let responseOnDeleteStaff = await deleteStaff(id)
    if (responseOnDeleteStaff) {
      let proStaffList = staffList.filter((item) => item.id !== id)
      setStaffList(proStaffList)
      notify(SUCCESS_STATUS)
      router.push(`/dashboard/others/package`)
    }
  }

  return (
    <StaffApiData.Provider
      value={{
        addStaff,
        getAllStaff,
        searchStaffRecords,
        searchStaffRecord,
        staffData,
        staffList,
        getStaff,
        updateStaff,
        deleteStaff,
        processAddStaff,
        processGetAllStaff,
        processSearchStaff,
        processGetStaffProfile,
        processUpdateStaffProfile,
        processDeleteStaff,
      }}
    >
      {props.children}
    </StaffApiData.Provider>
  )
}

export default StaffApiDataProvider

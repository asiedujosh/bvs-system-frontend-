"use client"
import React, { createContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ADDSTAFF } from "@/app/constant/staffConstants"
import { notify } from "@/app/utils/responseUtils"
import { SUCCESS_STATUS } from "../../constant/requestConstants"
import { getAllRole } from "@/app/context/AccessControl/AccessControl"
import {
  addStaff,
  getAllStaff,
  searchStaffRecords,
  getStaff,
  updateStaff,
  deleteStaff,
  changePassword,
} from "./Staff"

export const StaffApiData = createContext()

const StaffApiDataProvider = (props) => {
  const [staffList, setStaffList] = useState([])
  const [searchStaffRecord, setSearchStaffRecord] = useState(null)
  const [staffData, setStaffData] = useState(null)
  const [customField, setCustomField] = useState()
  const [staffRole, setStaffRole] = useState()

  const router = useRouter()

  useEffect(() => {
    let newQuest = async () => {
      let data = await getAllRole()
      if (data) {
        setStaffRole(data.data.allRole)
      } else {
        console.log("Things did not work out")
      }
    }
    newQuest()
  }, [])

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
      let data = []
      response.data.user.map((staff) => {
        let newRole = staffRole.filter((item) => item.id == staff.position)
        //console.log(staff)
        staff.position = newRole[0].role
        data.push(staff)
      })
      setStaffList(data)
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

  const processViewStaffProfile = async (id) => {
    processGetStaffProfile(id)
    router.push(`/users/viewUser`)
  }

  const processViewStaffUpdateProfile = async (id) => {
    processGetStaffProfile(id)
    let customData = ADDSTAFF.fieldDetail.filter(
      (item) => item.name !== "password" && item.name !== "confirmPassword"
    )
    setCustomField(customData)
    router.push(`/users/update`)
  }

  const processUpdateStaffProfile = async (id, data) => {
    let responseOnUpdateStaff = await updateStaff(id, data)
    if (responseOnUpdateStaff) {
      notify(SUCCESS_STATUS)
      router.push(`/users`)
    }
  }

  const processChangePassword = async (data) => {
    let responseOnChangePass = await changePassword(data)
    if (responseOnChangePass) {
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteStaff = async (id) => {
    let responseOnDeleteStaff = await deleteStaff(id)
    if (responseOnDeleteStaff) {
      let proStaffList = staffList.filter((item) => item.id !== id)
      setStaffList(proStaffList)
      notify(SUCCESS_STATUS)
      router.push(`/users`)
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
        staffRole,
        getStaff,
        updateStaff,
        deleteStaff,
        processAddStaff,
        processGetAllStaff,
        processSearchStaff,
        processGetStaffProfile,
        processUpdateStaffProfile,
        processDeleteStaff,
        processViewStaffProfile,
        processViewStaffUpdateProfile,
        customField,
        processChangePassword,
      }}
    >
      {props.children}
    </StaffApiData.Provider>
  )
}

export default StaffApiDataProvider

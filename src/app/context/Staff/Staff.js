"use client"
import { SUCCESS_STATUS } from "../../constant/requestConstants"
import axios from "../../utils/axios.config"
// import { TABLECONSTANTS } from "@/app/constant/IndividualConstants"

export const addStaff = async (data) => {
  try {
    let responseOnAddStaff = await axios.post("/api/register", data)
    if (responseOnAddStaff.status === SUCCESS_STATUS) {
      return responseOnAddStaff.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllStaff = async () => {
  try {
    let responseOnGetAllStaff = await axios.get("/api/staffGetAll")
    if (responseOnGetAllStaff.status === SUCCESS_STATUS) {
      return responseOnGetAllStaff.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const searchStaffRecords = async (data) => {
  try {
    let responseOnStaffSearch = await axios.get(
      `/api/staffSearch?keyword=${data}`
    )
    if (responseOnStaffSearch.status === SUCCESS_STATUS) {
      return responseOnStaffSearch.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getStaff = async (id) => {
  try {
    let responseOnGetStaff = await axios.get(`/api/staffProfile/${id}`)
    if (responseOnGetStaff.status === SUCCESS_STATUS) {
      return responseOnGetStaff.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const updateStaff = async (id, data) => {
  console.log(data)
  try {
    let responseOnUpdateStaff = await axios.put(`/api/staffUpdate/${id}`, data)
    if (responseOnUpdateStaff.status === SUCCESS_STATUS) {
      return responseOnUpdateStaff.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const changePassword = async (data) => {
  console.log(data)
  try {
    let responseOnChangePass = await axios.post(`/api/changePassword`, data)
    if (responseOnChangePass.status === SUCCESS_STATUS) {
      return responseOnChangePass.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteStaff = async (id) => {
  try {
    let responseOnDeleteStaff = await axios.delete(`/api/staffDelete/${id}`)
    if (responseOnDeleteStaff.status === SUCCESS_STATUS) {
      return responseOnDeleteStaff.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

"use client"
import {
  SUCCESS_STATUS,
  URL,
  TIMEOUT,
  NOTFOUND,
  TIMEEXCEED,
  UNHANDLEERR,
} from "../../constant/requestConstants"
// import axios from "../../utils/axios.config"
import axios from "axios"
import axiosRetry from "axios-retry"
// import { TABLECONSTANTS } from "@/app/constant/IndividualConstants"

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay })

export const addStaff = async (data) => {
  try {
    let responseOnAddStaff = await axios.post(
      `${URL}api/register`,
      data,
      TIMEOUT
    )
    if (responseOnAddStaff.status === SUCCESS_STATUS) {
      return responseOnAddStaff.data
    } else {
      return false
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === 404) {
      console.warn("Resource not found (404)")
      // Handle 404 response as needed
      return NOTFOUND
    } else if (err.code === "ECONNABORTED") {
      // Handle timeout error as needed
      console.error("Request timed out.")
      return TIMEEXCEED
    } else {
      // Handle other errors
      console.error("Unhandled error:", err)
      return UNHANDLEERR
    }
  }
}

export const getAllStaff = async () => {
  try {
    let responseOnGetAllStaff = await axios.get(
      `${URL}api/staffGetAll`,
      TIMEOUT
    )
    if (responseOnGetAllStaff.status === SUCCESS_STATUS) {
      return responseOnGetAllStaff.data
    } else {
      return false
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === 404) {
      console.warn("Resource not found (404)")
      // Handle 404 response as needed
      return NOTFOUND
    } else if (err.code === "ECONNABORTED") {
      // Handle timeout error as needed
      console.error("Request timed out.")
      return TIMEEXCEED
    } else {
      // Handle other errors
      console.error("Unhandled error:", err)
      return UNHANDLEERR
    }
  }
}

export const searchStaffRecords = async (data) => {
  try {
    let responseOnStaffSearch = await axios.get(
      `${URL}api/staffSearch?keyword=${data}`,
      TIMEOUT
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
    let responseOnGetStaff = await axios.get(
      `${URL}api/staffProfile/${id}`,
      TIMEOUT
    )
    if (responseOnGetStaff.status === SUCCESS_STATUS) {
      return responseOnGetStaff.data
    } else {
      return false
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === 404) {
      console.warn("Resource not found (404)")
      // Handle 404 response as needed
      return NOTFOUND
    } else if (err.code === "ECONNABORTED") {
      // Handle timeout error as needed
      console.error("Request timed out.")
      return TIMEEXCEED
    } else {
      // Handle other errors
      console.error("Unhandled error:", err)
      return UNHANDLEERR
    }
  }
}

export const updateStaff = async (id, data) => {
  console.log(data)
  try {
    let responseOnUpdateStaff = await axios.put(
      `${URL}api/staffUpdate/${id}`,
      data,
      TIMEOUT
    )
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
    let responseOnChangePass = await axios.post(
      `${URL}api/changePassword`,
      data,
      TIMEOUT
    )
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
    let responseOnDeleteStaff = await axios.delete(
      `${URL}api/staffDelete/${id}`,
      TIMEOUT
    )
    if (responseOnDeleteStaff.status === SUCCESS_STATUS) {
      return responseOnDeleteStaff.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

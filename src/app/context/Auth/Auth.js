"use client"
import {
  SUCCESS_STATUS,
  NOTFOUND,
  TIMEEXCEED,
  UNHANDLEERR,
  TOOMANYREQUEST,
} from "../../constant/requestConstants"
import axios from "../../utils/axios.config"

export const login = async (data) => {
  try {
    let responseOnLogin = await axios.post("/api/login", data)
    if (responseOnLogin.status === SUCCESS_STATUS) {
      return responseOnLogin.data
    } else {
      return false
    }
  } catch (err) {
    if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(login(data), 1000)
    } else if (err.response && err.response.status === 404) {
      console.warn("Resource not found (404)")
      // Handle 404 response as needed
      return NOTFOUND
    } else if (err.code.code === "ECONNABORTED") {
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

export const getAllUsers = async () => {
  try {
    let response = await axios.get("/api/staffGetAll")
    if (response.status === SUCCESS_STATUS) {
      return response.data
    } else {
      return false
    }
  } catch (err) {
    if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getAllUsers(), 1000)
    } else if (err.response && err.response.status === 404) {
      console.warn("Resource not found (404)")
      // Handle 404 response as needed
      return NOTFOUND
    } else if (err.code.code === "ECONNABORTED") {
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

export const retrieve = async () => {
  try {
    let responseOnRetrieve = await axios.get("/api/retrieve")
    if (responseOnRetrieve.status === SUCCESS_STATUS) {
      return responseOnRetrieve.data
    } else {
      return false
    }
  } catch (err) {
    if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(retrieve(), 1000)
    } else if (err.response && err.response.status === 404) {
      console.warn("Resource not found (404)")
      // Handle 404 response as needed
      return NOTFOUND
    } else if (err.code.code === "ECONNABORTED") {
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

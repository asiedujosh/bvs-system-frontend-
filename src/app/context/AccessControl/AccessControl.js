"use client"
import {
  SUCCESS_STATUS,
  URL,
  TIMEOUT,
  NOTFOUND,
  TIMEEXCEED,
  UNHANDLEERR,
  TOOMANYREQUEST,
} from "../../constant/requestConstants"
// import axios from "../../utils/axios.config"
import axios from "axios"
import axiosRetry from "axios-retry"
// import { TABLECONSTANTS } from "@/app/constant/IndividualConstants"
axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay })

export const addRole = async (data) => {
  try {
    let responseOnRole = await axios.post(`${URL}api/addRole`, data, TIMEOUT)
    if (responseOnRole.status === SUCCESS_STATUS) {
      return responseOnRole.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(addRole(data), 1000)
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

export const getAllRole = async () => {
  try {
    let responseOnGetAllRole = await axios.get(`${URL}api/getAllRole`, TIMEOUT)
    if (responseOnGetAllRole.status === SUCCESS_STATUS) {
      console.log("roles in")
      return responseOnGetAllRole.data
    } else {
      console.log("not success status but return was false")
      return false
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getAllRole(), 1000)
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

export const getAllClientPermission = async () => {
  try {
    let responseOnGetClientPermission = await axios.get(
      `${URL}api/getAllClientPermission`,
      TIMEOUT
    )
    if (responseOnGetClientPermission.status === SUCCESS_STATUS) {
      return responseOnGetClientPermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getAllClientPermission(), 1000)
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

export const getSingleClientPermission = async (id) => {
  try {
    let responseOnGetSingleClientPermission = await axios.get(
      `${URL}api/getSingleClientPermission/${id}`,
      TIMEOUT
    )
    if (responseOnGetSingleClientPermission.status === SUCCESS_STATUS) {
      return responseOnGetSingleClientPermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getSingleClientPermission(id), 1000)
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

export const getAllCompanyPermission = async () => {
  try {
    let responseOnGetAllCompanyPermission = await axios.get(
      `${URL}api/getAllCompanyPermission`,
      TIMEOUT
    )
    if (responseOnGetAllCompanyPermission.status === SUCCESS_STATUS) {
      return responseOnGetAllCompanyPermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getAllCompanyPermission(), 1000)
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

export const getSingleCompanyPermission = async (id) => {
  try {
    let responseOnGetSingleCompanyPermission = await axios.get(
      `${URL}api/getSingleCompanyPermission/${id}`,
      TIMEOUT
    )
    if (responseOnGetSingleCompanyPermission.status === SUCCESS_STATUS) {
      return responseOnGetSingleCompanyPermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getSingleCompanyPermission(id), 1000)
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

export const getAllPackagePermission = async () => {
  try {
    let responseOnGetAllPackagePermission = await axios.get(
      `${URL}api/getAllPackagePermission`,
      TIMEOUT
    )
    if (responseOnGetAllPackagePermission.status === SUCCESS_STATUS) {
      return responseOnGetAllPackagePermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getAllPackagePermission(), 1000)
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

export const getSinglePackagePermission = async (id) => {
  try {
    let responseOnGetSinglePackagePermission = await axios.get(
      `${URL}api/getSinglePackagePermission/${id}`,
      TIMEOUT
    )
    if (responseOnGetSinglePackagePermission.status === SUCCESS_STATUS) {
      return responseOnGetSinglePackagePermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getSinglePackagePermission(id), 1000)
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

export const getSingleUserPermission = async (id) => {
  try {
    let responseOnGetSingleUserPermission = await axios.get(
      `${URL}api/getSingleUserPermission/${id}`,
      TIMEOUT
    )
    if (responseOnGetSingleUserPermission.status === SUCCESS_STATUS) {
      return responseOnGetSingleUserPermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getSingleUserPermission(id), 1000)
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

export const getAllUserPermission = async () => {
  try {
    let responseOnGetAllUserPermission = await axios.get(
      `${URL}api/getAllUserPermission`,
      TIMEOUT
    )
    if (responseOnGetAllUserPermission.status === SUCCESS_STATUS) {
      return responseOnGetAllUserPermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getAllUserPermission(), 1000)
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

export const getSingleServicePermission = async (id) => {
  try {
    let responseOnGetSingleServicePermission = await axios.get(
      `${URL}api/getSingleServicePermission/${id}`,
      TIMEOUT
    )
    if (responseOnGetSingleServicePermission.status === SUCCESS_STATUS) {
      return responseOnGetSingleServicePermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getSingleServicePermission(id), 1000)
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

export const getAllServicePermission = async () => {
  try {
    let responseOnGetAllServicePermission = await axios.get(
      `${URL}api/getAllServicePermission`,
      TIMEOUT
    )
    if (responseOnGetAllServicePermission.status === SUCCESS_STATUS) {
      return responseOnGetAllServicePermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getAllServicePermission(), 1000)
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

export const getSingleProductPermission = async (id) => {
  try {
    let responseOnGetSingleProductPermission = await axios.get(
      `${URL}api/getSingleProductPermission/${id}`,
      TIMEOUT
    )
    if (responseOnGetSingleProductPermission.status === SUCCESS_STATUS) {
      return responseOnGetSingleProductPermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getSingleProductPermission(id), 1000)
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

export const getAllProductPermission = async () => {
  try {
    let responseOnGetAllProductPermission = await axios.get(
      `${URL}api/getAllProductPermission`,
      TIMEOUT
    )
    if (responseOnGetAllProductPermission.status === SUCCESS_STATUS) {
      return responseOnGetAllProductPermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getAllProductPermission(), 1000)
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

export const updatePermissions = async (data) => {
  try {
    let responseOnUpdatePermission = await axios.put(
      `${URL}api/updatePermission`,
      data,
      TIMEOUT
    )
    if (responseOnUpdatePermission.status === SUCCESS_STATUS) {
      return responseOnUpdatePermission.data
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
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(updatePermissions(data), 1000)
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

export const deleteRole = async (id) => {
  try {
    let responseOnDeleteRole = await axios.delete(
      `${URL}api/deleteRole/${id}`,
      TIMEOUT
    )
    if (responseOnDeleteRole.status === SUCCESS_STATUS) {
      return responseOnDeleteRole.data
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(deleteRole(id), 1000)
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

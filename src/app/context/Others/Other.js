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

export const addPackage = async (data) => {
  try {
    let responseOnAddPackage = await axios.post(
      `${URL}api/packageAdd`,
      data,
      TIMEOUT
    )
    if (responseOnAddPackage.status === SUCCESS_STATUS) {
      return responseOnAddPackage.data
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

export const getAllPackage = async () => {
  try {
    let responseOnGetAllPackages = await axios.get(
      `${URL}api/packageGetAll`,
      TIMEOUT
    )
    if (responseOnGetAllPackages.status === SUCCESS_STATUS) {
      return responseOnGetAllPackages.data
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

export const searchPackageRecords = async (data) => {
  try {
    let responseOnPackageSearch = await axios.get(
      `${URL}api/packageSearch?keyword=${data}`,
      TIMEOUT
    )
    if (responseOnPackageSearch.status === SUCCESS_STATUS) {
      return responseOnPackageSearch.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getPackage = async (id) => {
  try {
    let responseOnGetPackage = await axios.get(
      `${URL}api/packageProfile/${id}`,
      TIMEOUT
    )
    if (responseOnGetPackage.status === SUCCESS_STATUS) {
      return responseOnGetPackage.data
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

export const updatePackage = async (id, data) => {
  try {
    let responseOnUpdatePackage = await axios.put(
      `${URL}api/packageUpdate/${id}`,
      data,
      TIMEOUT
    )
    if (responseOnUpdatePackage.status === SUCCESS_STATUS) {
      return responseOnUpdatePackage.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deletePackage = async (id) => {
  try {
    let responseOnDeletePackage = await axios.delete(
      `${URL}api/packageDelete/${id}`,
      TIMEOUT
    )
    if (responseOnDeletePackage.status === SUCCESS_STATUS) {
      responseOnDeletePackage.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const addCompany = async (data) => {
  try {
    console.log(data)
    let responseOnAddCompany = await axios.post(
      `${URL}api/companyAdd`,
      data,
      TIMEOUT
    )
    if (responseOnAddCompany.status === SUCCESS_STATUS) {
      return responseOnAddCompany
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const getAllCompany = async () => {
  try {
    let responseOnGetAllCompany = await axios.get(
      `${URL}api/companyGetAll`,
      TIMEOUT
    )
    if (responseOnGetAllCompany.status === SUCCESS_STATUS) {
      return responseOnGetAllCompany.data
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

export const searchCompanyRecords = async (data) => {
  try {
    let responseOnCompanySearch = await axios.get(
      `${URL}api/company/companySearch?keyword=${data}`,
      TIMEOUT
    )
    if (responseOnCompanySearch.status === SUCCESS_STATUS) {
      return responseOnCompanySearch.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getACompany = async (id) => {
  try {
    let responseOnGetCompany = await axios.get(
      `${URL}api/companyProfile/${id}`,
      TIMEOUT
    )
    if (responseOnGetCompany.status === SUCCESS_STATUS) {
      return responseOnGetCompany.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const updateCompany = async (id, data) => {
  try {
    let responseOnUpdateCompany = await axios.put(
      `${URL}api/companyUpdate/${id}`,
      data,
      TIMEOUT
    )
    if (responseOnUpdateCompany.status === SUCCESS_STATUS) {
      return responseOnUpdateCompany.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteCompany = async (id) => {
  try {
    let responseOnDeleteCompany = await axios.delete(
      `${URL}api/companyDelete/${id}`,
      TIMEOUT
    )
    if (responseOnDeleteCompany.status === SUCCESS_STATUS) {
      return responseOnDeleteCompany.data.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

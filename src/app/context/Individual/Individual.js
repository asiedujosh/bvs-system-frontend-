"use client"
import {
  SUCCESS_STATUS,
  TIMEOUT,
  NOTFOUND,
  TIMEEXCEED,
  UNHANDLEERR,
  TOOMANYREQUEST,
} from "../../constant/requestConstants"
import axios from "../../utils/axios.config"
import { TABLECONSTANTS } from "@/app/constant/IndividualConstants"
import axiosRetry from "axios-retry"
// import { TABLECONSTANTS } from "@/app/constant/IndividualConstants"
axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay })

export const addClient = async (data) => {
  try {
    let responseOnAddClient = await axios.post("/api/clientAdd", data)
    if (responseOnAddClient.status === SUCCESS_STATUS) {
      return responseOnAddClient.data
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
      setTimeout(addClient(data), 1000)
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

export const editClient = async (data) => {
  try {
    let responseOnEditClient = await axios.put(
      `/api/clientUpdate/${data.clientId}`,
      data
    )
    if (responseOnEditClient.status === SUCCESS_STATUS) {
      return responseOnEditClient.data
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
      setTimeout(editClient(data), 1000)
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

export const addProduct = async (data) => {
  try {
    let responseOnAddProduct = await axios.post("/api/addProducts", data)
    if (responseOnAddProduct.status === SUCCESS_STATUS) {
      return responseOnAddProduct
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(addProduct(data), 1000)
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

export const editProduct = async (data) => {
  try {
    let responseOnEditProduct = await axios.put(
      `/api/updateProduct/${data.productId}`,
      data
    )
    if (responseOnEditProduct.status === SUCCESS_STATUS) {
      return responseOnEditProduct
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(editProduct(data), 1000)
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

export const addService = async (data) => {
  try {
    let responseOnAddService = await axios.post("/api/serviceAdd", data)
    if (responseOnAddService.status === SUCCESS_STATUS) {
      return responseOnAddService
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
      setTimeout(addService(data), 1000)
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

export const addCompany = async (data) => {
  try {
    let responseOnAddCompany = await axios.post("/api/addCompany", data)
    if (responseOnAddCompany.status === SUCCESS_STATUS) {
      return responseOnAddCompany
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(addCompany(data), 1000)
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

export const searchRecords = async (data) => {
  try {
    let responseOnSearch = await axios.get(`/api/search?keyword=${data}`)
    if (responseOnSearch.status === SUCCESS_STATUS) {
      return responseOnSearch.data
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
      setTimeout(searchRecords(data), 1000)
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

export const getRecordingTable = async (data) => {
  try {
    let responseOnGetRecordTable = await axios.get(
      `/api/records?page=${data}&perPage=${TABLECONSTANTS.listOnPages}`
    )
    if (responseOnGetRecordTable.status === SUCCESS_STATUS) {
      return responseOnGetRecordTable.data
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
      setTimeout(getRecordingTable(data), 1000)
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

export const getRemindAll = async () => {
  try {
    let responseOnRemindAll = await axios.get(`/api/remindAllRecord`)
    if (responseOnRemindAll.status === SUCCESS_STATUS) {
      return responseOnRemindAll.data
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
      setTimeout(getRemindAll(), 1000)
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

export const getDueRemind = async () => {
  try {
    let responseOnDueRemind = await axios.get(`/api/remindDueRecord`)
    if (responseOnDueRemind.status === SUCCESS_STATUS) {
      return responseOnDueRemind.data
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
      setTimeout(getDueRemind(), 1000)
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

export const dueRecordingTable = async (data) => {
  try {
    let responseOnDueTable = await axios.get(
      `/api/dueRecords?page=${data}&perPage=${TABLECONSTANTS.listOnPages}`
    )
    if (responseOnDueTable.status === SUCCESS_STATUS) {
      return responseOnDueTable.data
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
      setTimeout(dueRecordingTable(data), 1000)
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

export const getCompanyTable = async (data) => {
  try {
    let responseOnCompTable = await axios.get(
      `/api/getRecordsWithCompany?page=${data}&perPage=${TABLECONSTANTS.listOnPages}`
    )
    if (responseOnCompTable.status === SUCCESS_STATUS) {
      return responseOnCompTable.data
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
      setTimeout(getCompanyTable(data), 1000)
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

export const getClient = async (id) => {
  try {
    let responseOnClient = await axios.get(`/api/getClient/${id}`)
    if (responseOnClient.status === SUCCESS_STATUS) {
      return responseOnClient.data
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getClient(id), 1000)
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

export const getAllProducts = async (id) => {
  try {
    let responseAllProducts = await axios.get(`/api/getProducts/${id}`)
    if (responseAllProducts.status === SUCCESS_STATUS) {
      return responseAllProducts.data
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getAllProducts(id), 1000)
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

export const getService = async () => {
  try {
    let responseOnService = await axios.get("/api/allServices")
    if (responseOnService.status === SUCCESS_STATUS) {
      return responseOnService.data
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(getService(), 1000)
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

export const deactivateProduct = async (id) => {
  try {
    let responseOnDeactiveProduct = await axios.put(
      `/api/deactivateProduct/${id}`
    )
    if (responseOnDeactiveProduct.status === SUCCESS_STATUS) {
      return responseOnDeactiveProduct.data
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(deactivateProduct(id), 1000)
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

export const deleteProduct = async (data) => {
  //console.log(data);

  try {
    let responseOnDeleteProduct = await axios.delete("/api/deleteProduct", {
      data: data, // Pass the data in the config object
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })

    if (responseOnDeleteProduct.status === SUCCESS_STATUS) {
      return responseOnDeleteProduct.data
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(deleteProduct(data), 1000)
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

export const deleteClient = async (data) => {
  try {
    let responseOnClientDelete = await axios.delete("/api/deleteClient", {
      data: data,
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })

    if (responseOnClientDelete.status === SUCCESS_STATUS) {
      return responseOnClientDelete.data
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(deleteClient(data), 1000)
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

export const deleteService = async (data) => {
  try {
    let responseOnDeleteService = await axios.delete("/api/deleteService", {
      data: data,
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })

    if (responseOnDeleteService.status === SUCCESS_STATUS) {
      return responseOnDeleteService.data
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(deleteService(data), 1000)
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

export const sendSms = async (data) => {
  //console.log(data)
  try {
    let responseOnSendSms = await axios.post("/api/sendSmsToClient", data)
    console.log(responseOnSendSms)
    if (responseOnSendSms.data.success) {
      return responseOnSendSms.data
    }
  } catch (err) {
    if (axiosRetry.isNetworkError(err)) {
      console.log("Network error occurred. Retrying...")
      throw err
    } else if (axiosRetry.isRetryableError(err)) {
      console.log("Retrying due to timeout...")
      throw err
    } else if (err.response && err.response.status === TOOMANYREQUEST) {
      setTimeout(sendSms(data), 1000)
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

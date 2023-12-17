"use client"
import { SUCCESS_STATUS } from "../../constant/requestConstants"
import axios from "../../utils/axios.config"
import { TABLECONSTANTS } from "@/app/constant/IndividualConstants"

export const addClient = async (data) => {
  try {
    let responseOnAddClient = await axios.post("/api/clientAdd", data)
    console.log(responseOnAddClient)
    if (responseOnAddClient.status === SUCCESS_STATUS) {
      return responseOnAddClient.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const addProduct = async (data) => {
  try {
    let responseOnAddProduct = await axios.post("/api/addProducts", data)
    if (responseOnAddProduct.status === SUCCESS_STATUS) {
      return responseOnAddProduct
    }
  } catch (err) {
    console.log(err)
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
    console.log(err)
  }
}

export const addCompany = async (data) => {
  try {
    let responseOnAddCompany = await axios.post("/api/addCompany", data)
    if (responseOnAddCompany.status === SUCCESS_STATUS) {
      return responseOnAddCompany
    }
  } catch (err) {
    return false
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
    console.log(err)
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
    console.log(err)
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
    console.log(err)
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
    console.log(err)
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
    console.log(err)
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
    console.log(err)
  }
}

export const getClient = async (id) => {
  try {
    let responseOnClient = await axios.get(`/api/getClient/${id}`)
    if (responseOnClient.status === SUCCESS_STATUS) {
      return responseOnClient.data
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllProducts = async (id) => {
  try {
    let responseAllProducts = await axios.get(`/api/getProducts/${id}`)
    if (responseAllProducts.status === SUCCESS_STATUS) {
      return responseAllProducts.data
    }
  } catch (err) {
    console.log(err)
  }
}

export const getService = async () => {
  try {
    let responseOnService = await axios.get("/api/allServices")
    if (responseOnService.status === SUCCESS_STATUS) {
      return responseOnService.data
    }
  } catch (err) {
    console.log(err)
  }
}

export const sendMessage = async (tel, sms) => {
  try {
    let responseOnMessage = await axios.get(
      `https://sms.arkesel.com/sms/api?action=send-sms&api_key=UVJKUnRwbXBqa3RjRHRqc0h2d0o=&to=${tel}&from=BVS&sms=${sms}`
    )
    if (responseOnMessage.code === "ok") {
      return responseOnMessage.data
    }
  } catch (err) {
    console.log(err)
  }
}

"use client"
import { SUCCESS_STATUS } from "../../constant/requestConstants"
import axios from "../../utils/axios.config"
// import { TABLECONSTANTS } from "@/app/constant/IndividualConstants"

export const addPackage = async (data) => {
  try {
    let responseOnAddPackage = await axios.post("/api/packageAdd", data)
    if (responseOnAddPackage.status === SUCCESS_STATUS) {
      return responseOnAddPackage.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllPackage = async () => {
  try {
    let responseOnGetAllPackages = await axios.get("/api/packageGetAll")
    if (responseOnGetAllPackages.status === SUCCESS_STATUS) {
      return responseOnGetAllPackages.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const searchPackageRecords = async (data) => {
  try {
    let responseOnPackageSearch = await axios.get(
      `/api/packageSearch?keyword=${data}`
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
    let responseOnGetPackage = await axios.get(`/api/packageProfile/${id}`)
    if (responseOnGetPackage.status === SUCCESS_STATUS) {
      return responseOnGetPackage.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const updatePackage = async (id, data) => {
  try {
    let responseOnUpdatePackage = await axios.put(
      `/api/packageUpdate/${id}`,
      data
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
    let responseOnDeletePackage = await axios.delete(`/api/packageDelete/${id}`)
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
    let responseOnAddCompany = await axios.post("/api/companyAdd", data)
    console.log(responseOnAddCompany)
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
    let responseOnGetAllCompany = await axios.get("/api/companyGetAll")
    if (responseOnGetAllCompany.status === SUCCESS_STATUS) {
      return responseOnGetAllCompany.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const searchCompanyRecords = async (data) => {
  try {
    let responseOnCompanySearch = await axios.get(
      `/api/company/companySearch?keyword=${data}`
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
    let responseOnGetCompany = await axios.get(`/api/companyProfile/${id}`)
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
      `/api/companyUpdate/${id}`,
      data
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
    let responseOnDeleteCompany = await axios.delete(`/api/companyDelete/${id}`)
    if (responseOnDeleteCompany.status === SUCCESS_STATUS) {
      return responseOnDeleteCompany.data.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

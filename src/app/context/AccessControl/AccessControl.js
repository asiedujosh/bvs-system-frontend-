"use client"
import { SUCCESS_STATUS } from "../../constant/requestConstants"
import axios from "../../utils/axios.config"

export const addRole = async (data) => {
  try {
    let responseOnRole = await axios.post("/api/addRole", data)
    if (responseOnRole.status === SUCCESS_STATUS) {
      return responseOnRole.data
    } else {
      return false
    }
  } catch (err) {
    //console.log(err)
    return false
  }
}

export const getAllRole = async () => {
  try {
    let responseOnGetAllRole = await axios.get("/api/getAllRole")
    if (responseOnGetAllRole.status === SUCCESS_STATUS) {
      return responseOnGetAllRole.data
    } else {
      return false
    }
  } catch (err) {
    //console.log(err)
    return false
  }
}

export const getAllClientPermission = async () => {
  try {
    let responseOnGetClientPermission = await axios.get(
      "/api/getAllClientPermission"
    )
    if (responseOnGetClientPermission.status === SUCCESS_STATUS) {
      return responseOnGetClientPermission.data
    } else {
      return false
    }
  } catch (err) {
    //console.log(err)
    return false
  }
}

export const getSingleClientPermission = async (id) => {
  try {
    let responseOnGetSingleClientPermission = await axios.get(
      `/api/getSingleClientPermission/${id}`
    )
    if (responseOnGetSingleClientPermission.status === SUCCESS_STATUS) {
      return responseOnGetSingleClientPermission.data
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const getAllCompanyPermission = async () => {
  try {
    let responseOnGetAllCompanyPermission = await axios.get(
      "/api/getAllCompanyPermission"
    )
    if (responseOnGetAllCompanyPermission.status === SUCCESS_STATUS) {
      return responseOnGetAllCompanyPermission.data
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const getSingleCompanyPermission = async (id) => {
  try {
    let responseOnGetSingleCompanyPermission = await axios.get(
      `/api/getSingleCompanyPermission/${id}`
    )
    if (responseOnGetSingleCompanyPermission.status === SUCCESS_STATUS) {
      return responseOnGetSingleCompanyPermission.data
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const getAllPackagePermission = async () => {
  try {
    let responseOnGetAllPackagePermission = await axios.get(
      "/api/getAllPackagePermission"
    )
    if (responseOnGetAllPackagePermission.status === SUCCESS_STATUS) {
      return responseOnGetAllPackagePermission.data
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const getSinglePackagePermission = async (id) => {
  try {
    let responseOnGetSinglePackagePermission = await axios.get(
      `/api/getSinglePackagePermission/${id}`
    )
    if (responseOnGetSinglePackagePermission.status === SUCCESS_STATUS) {
      return responseOnGetSinglePackagePermission.data
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const getAllUserPermission = async () => {
  try {
    let responseOnGetAllUserPermission = await axios.get(
      "/api/getAllUserPermission"
    )
    if (responseOnGetAllUserPermission.status === SUCCESS_STATUS) {
      return responseOnGetAllUserPermission.data
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const getSingleUserPermission = async (id) => {
  try {
    let responseOnGetSingleUserPermission = await axios.get(
      `/api/getSingleUserPermission/${id}`
    )
    if (responseOnGetSingleUserPermission.status === SUCCESS_STATUS) {
      return responseOnGetSingleUserPermission.data
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const updatePermissions = async (data) => {
  try {
    let responseOnUpdatePermission = await axios.put(
      "/api/updatePermission",
      data
    )
    if (responseOnUpdatePermission.status === SUCCESS_STATUS) {
      return responseOnUpdatePermission.data
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const deleteRole = async (id) => {
  try {
    let responseOnDeleteRole = await axios.delete(`/api/deleteRole/${id}`)
    if (responseOnDeleteRole.status === SUCCESS_STATUS) {
      return responseOnDeleteRole.data
    }
  } catch (err) {
    return false
  }
}

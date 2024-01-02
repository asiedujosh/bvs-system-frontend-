"use client"
import { SUCCESS_STATUS } from "../../constant/requestConstants"
import axios from "../../utils/axios.config"
import { TABLECONSTANTS } from "@/app/constant/IndividualConstants"

export const addClient = async (data) => {
  try {
    let responseOnAddClient = await axios.post("/api/clientAdd", data)
    if (responseOnAddClient.status === SUCCESS_STATUS) {
      return responseOnAddClient.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
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

export const deactivateProduct = async (id) => {
  try {
    let responseOnDeactiveProduct = await axios.put(
      `/api/deactivateProduct/${id}`
    )
    if (responseOnDeactiveProduct.status === SUCCESS_STATUS) {
      return responseOnDeactiveProduct.data
    }
  } catch (err) {
    console.log(err)
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
    console.error(err)
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
    console.log(err)
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
    console.log(err)
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
    console.log(err)
  }
}

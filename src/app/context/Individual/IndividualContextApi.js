"use client"
import React, { createContext, useState } from "react"
import { notify } from "@/app/utils/responseUtils"
import { SUCCESS_STATUS } from "../../constant/requestConstants"
import { useRouter } from "next/navigation"
import {
  addClient,
  addService,
  addProduct,
  addCompany,
  getRecordingTable,
  getService,
  getCompanyTable,
  getClient,
  getAllProducts,
  searchRecords,
} from "./Individual"

export const IndividualApiData = createContext()

const IndividualApiDataProvider = (props) => {
  // const [userId, setUserId] = useState("")
  const [clientData, setClientData] = useState(null)
  const [searchRecord, setSearchRecord] = useState(null)
  const [products, setProducts] = useState(null)
  const [recordTable, setRecordTable] = useState([])
  const [individualTable, setIndividualTable] = useState([])
  const [companyRecordTable, setCompanyRecordTable] = useState([])
  const [companyProductRec, setCompanyProductRec] = useState([])
  const [serviceList, setServiceList] = useState([])
  const [proUnderCompany, setProUnderCompany] = useState([])

  const router = useRouter()

  const processAddClient = async (data) => {
    let response = await addClient(data)
    if (response) {
      setClientData(response.data.client)
      notify(SUCCESS_STATUS)
      //router.push(`/dashboard/individual/${response.data.product.productId}`)
    }
  }

  const processAddService = async (data) => {
    let response = await addService(data)
    if (response) {
      let clientId = clientData.clientId || clientData.client.clientId
      processGetServices()
      processGetProfile(clientId)
      router.push(`/dashboard/individual/profile/${clientId}`)
    }
  }

  const processAddProduct = async (data) => {
    let response = await addProduct(data)
    if (response) {
      let clientId = clientData.clientId || clientData.client.clientId
      processGetServices()
      processGetProfile(clientId)
      router.push(`/dashboard/individual/profile/${clientId}`)
    }
  }

  const processGetServices = async () => {
    let response = await getService()
    if (response) {
      setServiceList(response.data)
    }
  }

  const processGetRecordingTable = async (data) => {
    let response = await getRecordingTable(data)
    if (response) {
      let indiTable = []
      let compTable = []
      setRecordTable(response.data.dashTable)
      response.data.dashTable.data.map((item) => {
        if (item.associate == "Company") {
          compTable.push(item)
        } else {
          indiTable.push(item)
        }
      })
      setIndividualTable(indiTable)
      setCompanyRecordTable(compTable)
      processGetServices()
    }
  }

  const processGetCompRecordTable = async (data) => {
    let response = await getCompanyTable(data)
    if (response) {
      setCompanyProductRec(response.data.companyRecord)
      //console.log(response)
    }
  }

  const processViewProductsUnderCompany = async (data) => {
    let newRec = companyRecordTable.filter((item) => item.companyName == data)
    setProUnderCompany(newRec)
    router.push(`/dashboard/company/products`)
  }

  const processGetProfile = async (id) => {
    //console.log(id)
    let responseOnProfile = await getClient(id)
    let responseOnProducts = await getAllProducts(id)
    if (responseOnProfile) {
      setClientData(responseOnProfile)
    }
    if (responseOnProducts) {
      console.log(responseOnProducts)
      setProducts(responseOnProducts)
    }
    router.push(`/dashboard/individual/profile/${id}`)
  }

  const processSearchRecord = async (data) => {
    let responseOnSearch = await searchRecords(data)
    if (responseOnSearch) {
      console.log(responseOnSearch.data)
      setSearchRecord(responseOnSearch.data.dashTable)
    }
  }

  const processAddCompany = async (data) => {
    let responseOnAddCompany = await addCompany(data)
    if (responseOnAddCompany) {
      console.log(data)
    } else {
      console.log("Response On Company")
    }
  }

  return (
    <IndividualApiData.Provider
      value={{
        processAddClient,
        processAddService,
        processAddCompany,
        clientData,
        products,
        processViewProductsUnderCompany,
        processGetRecordingTable,
        processGetCompRecordTable,
        processGetServices,
        processGetProfile,
        processAddProduct,
        processSearchRecord,
        recordTable,
        serviceList,
        searchRecord,
        individualTable,
        companyRecordTable,
        companyProductRec,
        proUnderCompany,
      }}
    >
      {props.children}
    </IndividualApiData.Provider>
  )
}

export default IndividualApiDataProvider

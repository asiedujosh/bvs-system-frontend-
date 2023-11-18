"use client"
import React, { createContext, useContext, useState } from "react"
import { useRouter } from "next/navigation"
import {
  addClient,
  addService,
  addProduct,
  addCompany,
  getRecordingTable,
  getService,
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
  const [recordTable, setRecordTable] = useState(null)
  const [serviceList, setServiceList] = useState([])
  const router = useRouter()

  const processAddClient = async (data) => {
    let response = await addClient(data)
    if (response) {
      setClientData(response.data.client)
      router.push(`/dashboard/individual/${response.data.product.productId}`)
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
      setRecordTable(response.data.dashTable)
      processGetServices()
    }
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
        processGetRecordingTable,
        processGetServices,
        processGetProfile,
        processAddProduct,
        processSearchRecord,
        recordTable,
        serviceList,
        searchRecord,
      }}
    >
      {props.children}
    </IndividualApiData.Provider>
  )
}

export default IndividualApiDataProvider

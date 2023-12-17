"use client"
import React, { createContext, useState } from "react"
import { notify } from "@/app/utils/responseUtils"
import { SUCCESS_STATUS } from "@/app/constant/requestConstants"
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
  dueRecordingTable,
  getDueRemind,
  getRemindAll,
  sendMessage,
} from "./Individual"

export const IndividualApiData = createContext()

const IndividualApiDataProvider = (props) => {
  // const [userId, setUserId] = useState("")
  const [clientData, setClientData] = useState(null)
  const [searchRecord, setSearchRecord] = useState(null)
  const [products, setProducts] = useState(null)
  const [recordTable, setRecordTable] = useState([])
  const [individualTable, setIndividualTable] = useState([])
  const [dueTable, setDueTable] = useState([])
  const [companyRecordTable, setCompanyRecordTable] = useState([])
  const [companyProductRec, setCompanyProductRec] = useState([])
  const [serviceList, setServiceList] = useState([])
  const [proUnderCompany, setProUnderCompany] = useState([])
  const [paginationData, setPaginationData] = useState()
  const [remindDueTable, setRemindDueTable] = useState()
  const [remindAllTable, setRemindAllTable] = useState()

  const router = useRouter()

  const processAddClient = async (data) => {
    let response = await addClient(data)
    if (response) {
      setClientData(response.data.client)
      notify(SUCCESS_STATUS)
      router.push(`/dashboard/individual`)
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
      setPaginationData(response.data.pagination)
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

  const processGetDueRecordingTable = async (data) => {
    let response = await dueRecordingTable(data)
    if (response) {
      if (response.data.dueData) {
        setRecordTable(response.data.dueData)
        setPaginationData(response.data.pagination)
        let iniTable = []
        response.data.dueData.map((item) => {
          if (item.associate !== "Company") iniTable.push(item)
        })
        setDueTable(iniTable)
      }
    }
  }

  const processRemindAllRecordingTable = async () => {
    let response = await getRemindAll()
    if (response) {
      if (response.data.remindAllData) {
        setRemindAllTable(response.data.remindAllData)
      }
    }
  }

  const processRemindDueRecordingTable = async () => {
    let response = await getDueRemind()
    if (response) {
      if (response.data.remindDueData) {
        //console.log(response.data.remindDueData)
        setRemindDueTable(response.data.remindDueData)
      }
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

  const processSendMessage = async (data) => {
    let newTelArray = []
    if (data.clients.length > 0) {
      data.clients.map((item) => {
        newTelArray.push(item.clientTel)
      })

      let clientPhoneNo = newTelArray.join(",")
      // console.log(clientPhoneNo)
      let responseOnMessage = sendMessage(clientPhoneNo, data.message)
      // console.log(responseOnMessage)
      if (responseOnMessage) {
        notify(SUCCESS_STATUS)
      }
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
        processRemindAllRecordingTable,
        processGetRecordingTable,
        processGetCompRecordTable,
        processRemindDueRecordingTable,
        processGetDueRecordingTable,
        processGetServices,
        processGetProfile,
        processAddProduct,
        processSearchRecord,
        processSendMessage,
        recordTable,
        dueTable,
        serviceList,
        searchRecord,
        individualTable,
        companyRecordTable,
        remindDueTable,
        remindAllTable,
        companyProductRec,
        proUnderCompany,
        paginationData,
      }}
    >
      {props.children}
    </IndividualApiData.Provider>
  )
}

export default IndividualApiDataProvider

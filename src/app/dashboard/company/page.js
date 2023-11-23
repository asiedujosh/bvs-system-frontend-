"use client"
import { IndividualApiData } from "../../context/Individual/IndividualContextApi.js"
import { useContext, useEffect } from "react"
import Navbar from "../../components/navbar.js"
import ComRecordTableContainer from "@/app/components/comRecordTableContainer.js"
import { COMPANY_RECORDS_TABLE } from "@/app/constant/companyConstants"
import { OtherApiData } from "@/app/context/Others/OtherContextApi.js"

const Company = () => {
  // useEffect(() => {
  //   !isAuthenticated && processRetrieve()
  // }, [])
  const { processGetAllCompany } = useContext(OtherApiData)
  const {
    processGetCompRecordTable,
    companyProductRec,
    processGetRecordingTable,
  } = useContext(IndividualApiData)
  useEffect(() => {
    processGetAllCompany()
    processGetCompRecordTable(1)
    processGetRecordingTable(1)
  }, [])
  return (
    <>
      <ComRecordTableContainer
        tableHeader={COMPANY_RECORDS_TABLE}
        tableInfo={companyProductRec}
      />
    </>
  )
}
export default Company

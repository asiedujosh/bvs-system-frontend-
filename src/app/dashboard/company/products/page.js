"use client"
import SubHeader from "@/app/components/subHeader.js"
import TableContainer from "@/app/components/tableContainer.js"
import checkExpiryDate from "../../../utils/checkExpiryDate"
import { DASHBOARDTABLE } from "@/app/constant/IndividualConstants"
import { useEffect, useContext } from "react"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"

const CompanyProducts = () => {
  const { proUnderCompany } = useContext(IndividualApiData)
  useEffect(() => {
    console.log("We are stopping")
  }, [])

  // The correct one is to use individualTable, We use company for debug
  //   let dueRecords =
  //   proUnderCompany &&
  //     proUnderCompany.filter((item) => !checkExpiryDate(item.expireDate))

  return (
    <>
      <TableContainer
        tableHeader={DASHBOARDTABLE}
        tableInfo={proUnderCompany}
      />
    </>
  )
}

export default CompanyProducts

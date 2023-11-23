"use client"
import SubHeader from "@/app/components/subHeader.js"
import TableContainer from "@/app/components/tableContainer.js"
import checkExpiryDate from "@/app/utils/checkExpiryDate"
import { DASHBOARDTABLE } from "@/app/constant/IndividualConstants"
import { useEffect, useContext } from "react"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"

const AllClients = () => {
  const {
    processGetRecordingTable,
    recordTable,
    individualTable,
    companyRecordTable,
  } = useContext(IndividualApiData)
  useEffect(() => {
    processGetRecordingTable(1)
  }, [])

  console.log(companyRecordTable)

  // The correct one is to use individualTable, We use company for debug
  let dueRecords =
    individualTable &&
    individualTable.filter((item) => !checkExpiryDate(item.expireDate))

  return (
    <>
      <SubHeader />
      {recordTable && (
        <TableContainer tableHeader={DASHBOARDTABLE} tableInfo={dueRecords} />
      )}
    </>
  )
}

export default AllClients

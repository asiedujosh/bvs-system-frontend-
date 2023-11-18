"use client"
import SubHeader from "@/app/components/subHeader.js"
import TableContainer from "@/app/components/tableContainer.js"
import checkExpiryDate from "../../utils/checkExpiryDate"
import { DASHBOARDTABLE } from "@/app/constant/IndividualConstants"
import { useEffect, useContext } from "react"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"

const Individual = () => {
  const { processGetRecordingTable, recordTable, searchRecord } =
    useContext(IndividualApiData)
  useEffect(() => {
    processGetRecordingTable(1)
  }, [])

  let dueRecords =
    recordTable &&
    recordTable.data.filter((item) => checkExpiryDate(item.expiryDate))
  //checkExpiryDate(item.expiryDate)
  // console.log(dueRecords)

  return (
    <>
      <SubHeader />
      {recordTable && (
        <TableContainer tableHeader={DASHBOARDTABLE} tableInfo={dueRecords} />
      )}
    </>
  )
}

export default Individual

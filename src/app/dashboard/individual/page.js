"use client"
import SubHeader from "@/app/components/subHeader.js"
import TableContainer from "@/app/components/tableContainer.js"
import checkExpiryDate from "@/app/utils/checkExpiryDate"
import { DASHBOARDTABLE } from "@/app/constant/IndividualConstants"
import { useEffect, useContext } from "react"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"

const Individual = () => {
  const {
    processGetDueRecordingTable,
    recordTable,
    dueTable,
    individualTable,
    searchRecord,
  } = useContext(IndividualApiData)
  useEffect(() => {
    processGetDueRecordingTable(1)
  }, [])

  // let dueRecords =
  //   dueTable &&
  //   dueTable.filter((item) => checkExpiryDate(item.expireDate) === false)
  //checkExpiryDate(item.expiryDate)
  // console.log(dueRecords)

  return (
    <div>
      <SubHeader />
      <div style={{ maxHeight: "80vh", overflow: "auto" }}>
        {recordTable && (
          <TableContainer tableHeader={DASHBOARDTABLE} tableInfo={dueTable} />
        )}
      </div>
    </div>
  )
}

export default Individual

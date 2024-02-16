"use client"
import SubHeader from "@/app/components/subHeader.js"
import TableContainer from "@/app/components/tableContainer.js"
import checkExpiryDate from "@/app/utils/checkExpiryDate"
import { DASHBOARDTABLE } from "@/app/constant/IndividualConstants"
import { useEffect, useContext } from "react"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"

const AllClients = () => {
  const { processGetRecordingTable, recordTable, individualTable } =
    useContext(IndividualApiData)
  useEffect(() => {
    processGetRecordingTable(1)
  }, [])

  // The correct one is to use individualTable, We use company for debug

  const displayInfo = () => {
    if (individualTable !== null) {
      return (
        <>
          <SubHeader />
          <div style={{ maxHeight: "80vh", overflow: "auto" }}>
            {recordTable && (
              <TableContainer
                tableHeader={DASHBOARDTABLE}
                tableInfo={individualTable}
              />
            )}
          </div>
        </>
      )
    } else {
      return (
        <main className="flex min-h-screen flex-col items-center justify-between md:py-24">
          <div className="flex items-center justify-center h-1/2 mt-32">
            <div className="animate-pulse bg-gray-200 p-6 rounded-md shadow-md">
              <div className="h-8 bg-gray-300 w-full mb-4">
                <h6>Bvs System is Loading...</h6>
              </div>
            </div>
          </div>
        </main>
      )
    }
  }

  return <>{displayInfo()}</>
}

export default AllClients

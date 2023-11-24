"use client"
import { useContext, useEffect, useState } from "react"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi"
import SearchContainer from "@/app/components/searchContainer"
import StaffTable from "@/app/components/staffTable"
import PaginationContainer from "@/app/components/paginationContainer"
import PrintButton from "@/app/components/printButton"

const StaffTableContainer = ({ staffInfo }) => {
  const { processSearchRecord } = useContext(StaffApiData)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // let handleSearchTerm = (e) => {
  //   //processSearchRecord()
  // }
  //   const handleSearchChange = (data) => {
  //     console.log(data)
  //     setSearchTerm(data)
  //   }

  //   const handleSearchSubmit = () => {
  //     //e.preventDefault()
  //     //console.log(searchTerm)
  //     processSearchRecord(searchTerm)
  //   }

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <StaffTable staffInfo={staffInfo} />
      </div>
      <PaginationContainer />
      <PrintButton />
    </div>
  )
}

export default StaffTableContainer

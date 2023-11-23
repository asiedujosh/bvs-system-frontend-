"use client"
import { useContext, useEffect, useState } from "react"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import SearchContainer from "@/app/components/searchContainer"
import CompanyTable from "@/app/components/companyTable"
import PaginationContainer from "@/app/components/paginationContainer"
import PrintButton from "@/app/components/printButton"

const ComTableContainer = ({ tableHeader, tableInfo }) => {
  const { processSearchRecord } = useContext(IndividualApiData)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // let handleSearchTerm = (e) => {
  //   //processSearchRecord()
  // }
  const handleSearchChange = (data) => {
    console.log(data)
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    //console.log(searchTerm)
    processSearchRecord(searchTerm)
  }

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <SearchContainer
        value={searchTerm}
        change={(data) => {
          handleSearchChange(data)
        }}
        submitSearch={() => {
          handleSearchSubmit()
        }}
      />
      <div className="overflow-auto" style={{ height: "80%" }}>
        <CompanyTable tableHeader={tableHeader} tableInfo={tableInfo} />
      </div>
      <PaginationContainer />
      <PrintButton />
    </div>
  )
}

export default ComTableContainer

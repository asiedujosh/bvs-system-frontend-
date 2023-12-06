"use client"
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid"
import { useEffect, useContext } from "react"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"

const PaginationButton = ({ direction }) => {
  const { processGetRecordingTable, paginationData } =
    useContext(IndividualApiData)

  //processGetRecordingTable(1)
  const handleNext = () => {
    if (paginationData.current_page !== paginationData.last_page) {
      const nextPage = paginationData.current_page + 1
      processGetRecordingTable(nextPage)
    }
  }

  const handlePrev = () => {
    if (paginationData.current_page !== 1) {
      const prevPage = paginationData.current_page - 1
      processGetRecordingTable(prevPage)
    }
  }

  const iconStyle = "h-10 w-10 text-black"
  const defaultStyle = "h-10 w-10 text-gray-200"
  const icon =
    direction === "prev" ? (
      <ArrowLeftCircleIcon
        className={
          paginationData &&
          (paginationData.current_page === 1 ? defaultStyle : iconStyle)
        }
      />
    ) : (
      <ArrowRightCircleIcon
        className={
          paginationData &&
          (paginationData.current_page === paginationData.last_page
            ? defaultStyle
            : iconStyle)
        }
      />
    )
  return (
    <button
      onClick={() => {
        direction === "prev" ? handlePrev() : handleNext()
      }}
      className=""
    >
      {icon}
    </button>
  )
}

export default PaginationButton

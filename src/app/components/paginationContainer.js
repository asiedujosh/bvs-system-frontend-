"use client"
import { useContext } from "react"
import PaginationButton from "@/app/components/paginationButton"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"

const PaginationContainer = () => {
  const { paginationData } = useContext(IndividualApiData)
  return (
    <div className="flex justify-between mt-2">
      <div className="flex space-x-2 justify-center items-center">
        <PaginationButton direction={"prev"} />
        <PaginationButton />
      </div>
      <div>
        <p className="text-gray-500">
          Total {paginationData ? paginationData.total : "0"}
        </p>
      </div>
      <p className="text-gray-500">
        Page {paginationData ? paginationData.current_page : "0"} of{" "}
        {paginationData ? paginationData.last_page : "0"}
      </p>
    </div>
  )
}

export default PaginationContainer

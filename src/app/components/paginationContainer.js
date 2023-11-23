import PaginationButton from "@/app/components/paginationButton"

const PaginationContainer = () => {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex space-x-2 justify-center items-center">
        <PaginationButton direction={"prev"} />
        <PaginationButton />
      </div>
      <div>
        <p className="text-gray-500">Total 200</p>
      </div>
      <p className="text-gray-500">Page 1 of 5</p>
    </div>
  )
}

export default PaginationContainer

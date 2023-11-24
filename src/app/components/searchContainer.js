"use client"

const SearchContainer = ({ change, submitSearch, value }) => {
  const handleInputChange = (e) => {
    // console.log(e.target.value)
    change(e.target.value)
  }

  return (
    <div className="mb-4 flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded"
        value={value}
        onChange={(e) => {
          handleInputChange(e)
        }}
      />
      <button
        onClick={() => {
          submitSearch()
        }}
        className="bg-gray-200 text-gray-600 px-4 py-2 rounded-l-none rounded-r border border-gray-300"
      >
        Search
      </button>
    </div>
  )
}

export default SearchContainer

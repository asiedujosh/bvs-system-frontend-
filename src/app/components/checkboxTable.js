import React, { useState } from "react"

const CheckboxTable = ({ data }) => {
  //console.log(data)
  const [selectedItems, setSelectedItems] = useState([])
  const [selectAll, setSelectAll] = useState(false)

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      )
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedItems([])
    } else {
      setSelectedItems([...data])
    }
    setSelectAll(!selectAll)
  }

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
                className="form-checkbox h-5 w-5 text-blue-800"
              />
            </th>
            <th className="border p-2">Client Name</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                    className="form-checkbox h-5 w-5 text-blue-800"
                  />
                </td>
                <td className="border p-2">{item.clientName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CheckboxTable

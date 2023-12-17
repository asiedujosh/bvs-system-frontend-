const CheckboxTable = ({
  data,
  checkBox,
  allCheckBox,
  selectedItems,
  selectAll,
}) => {
  const handleCheckboxChange = (item) => {
    checkBox(item)
  }

  const handleSelectAllChange = () => {
    allCheckBox()
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

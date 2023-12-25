"use client"
import { useEffect } from "react"

const SelectField = ({ field, value, change, options }) => {
  useEffect(() => {
    change(options && options[0], field.name)
  }, [])

  const handleInputChange = (e) => {
    change(e.target.value, field.name)
  }
  return (
    <div class={field.marginButtom}>
      <label for="username" class="text-gray-600">
        {field.label}
      </label>
      <select
        id={field.name}
        name={field.name}
        value={value[field.name]}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
      >
        {options &&
          options.map((item) => {
            return <option value={item}>{item}</option>
          })}
      </select>
    </div>
  )
}

export default SelectField

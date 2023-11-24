"use client"
// components/TextInput.js
const InputField = ({ field, value, change }) => {
  const handleInputChange = (e) => {
    change(e.target.value, field.name)
  }

  return (
    <div className="mb-4">
      <label className="text-gray-600">{field.label}</label>
      <input
        type={field.type}
        id={field.name}
        name={field.name}
        value={value[field.name]}
        onChange={handleInputChange}
        placeholder={field.placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
      />
    </div>
  )
}

export default InputField

"use client"
// components/TextInput.js
const IdField = ({ field, value }) => {
  return (
    <div class="mb-4">
      <label for="idField" class="text-gray-600">
        {field}
      </label>
      <input
        type="text"
        value={value}
        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        readOnly
      />
    </div>
  )
}

export default IdField

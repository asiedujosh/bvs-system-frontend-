import { ERROR_MSG } from "@/app/constant/errorConstants"

const InputField = ({ field, value, change, errorData }) => {
  const handleInputChange = (e) => {
    change(e.target.value, field.name)
  }

  let err = errorData && errorData.filter((item) => item.id == field.name)

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
      {err && (
        <p className="text-red-500 text-sm">
          {err.length > 0 ? err[0].name : ""}{" "}
          {err.length > 0 ? ERROR_MSG.empty : ""}
        </p>
      )}
    </div>
  )
}

export default InputField

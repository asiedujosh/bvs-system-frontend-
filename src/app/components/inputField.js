import { ERROR_MSG } from "@/app/constant/errorConstants"

const InputField = ({ field, value, change, errorData }) => {
  const handleInputChange = (e) => {
    change(e.target.value, field.name)
  }

  let err = errorData.filter((item) => item.id == field.name)

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
      {err.length > 0 && (
        <p className="text-red-500 text-sm">
          {err[0].name} {ERROR_MSG.empty}
        </p>
      )}
    </div>
  )
}

export default InputField

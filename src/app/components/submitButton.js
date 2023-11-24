const SubmitBtn = ({ text, submit, color }) => {
  const handleSubmit = (e) => {
    submit(e)
  }

  const submitColor = `w-full ${
    color ? "bg-red-500" : "bg-gray-800"
  } text-white py-2 rounded-md hover:${
    color ? "bg-red-400" : "bg-gray-600"
  }  transition duration-300`
  return (
    <button
      className={submitColor}
      onClick={(e) => {
        handleSubmit(e)
      }}
    >
      {text}
    </button>
  )
}

export default SubmitBtn

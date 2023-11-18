const currentDate = () => {
  const today = new Date()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")
  const year = today.getFullYear()
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}

export default currentDate

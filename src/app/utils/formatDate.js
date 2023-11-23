const formatDate = (newDate) => {
  const month = String(newDate.getMonth() + 1).padStart(2, "0")
  const day = String(newDate.getDate()).padStart(2, "0")
  const year = newDate.getFullYear()
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}

export default formatDate

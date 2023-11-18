const generateUniqueID = (prefix) => {
  const uniqueID = `${prefix}-${Math.floor(Math.random() * 1000000000)}`
  console.log(uniqueID)
  return uniqueID
}

export default generateUniqueID

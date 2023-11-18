const readableDate = (incomingDate) => {
  // Input date string
  const dateString = incomingDate

  // Convert the date string to a JavaScript Date object
  const date = new Date(dateString)

  // Define options for formatting the date
  const options = { year: "numeric", month: "long", day: "numeric" }

  // Format the date using the options
  const formattedDate = date.toLocaleDateString(undefined, options)

  //console.log(formattedDate); // Output: "March 5, 2024"
  return formattedDate
}

export default readableDate

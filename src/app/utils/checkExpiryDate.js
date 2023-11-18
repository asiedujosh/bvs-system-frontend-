import currentDate from "@/app/utils/currentDate"
const checkExpiryDate = (dateString2) => {
  // Convert the date strings to JavaScript Date objects
  //Todays Date
  let dateString1 = currentDate()
  const date1 = new Date(dateString1)
  const date2 = new Date(dateString2)

  // Compare the dates
  if (date1.getTime() > date2.getTime()) {
    return false // date1 is ahead of date2
  } else if (date1.getTime() === date2.getTime()) {
    return true // date1 is the same day as date2
  } else {
    return false // date1 is behind date2
  }
}

export default checkExpiryDate

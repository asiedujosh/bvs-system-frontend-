"use client"
import currentDate from "@/app/utils/currentDate"
const daysLeft = (expiryDate) => {
  // Convert the date strings to JavaScript Date objects
  //Todays Date
  let dateString1 = currentDate()
  const date1 = new Date(dateString1)
  const date2 = new Date(expiryDate)

  var timeDifference = date2 - date1

  // Calculating the number of days
  var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
  return daysDifference
}

export default daysLeft

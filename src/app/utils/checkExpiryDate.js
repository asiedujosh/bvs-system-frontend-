"use client"
import currentDate from "@/app/utils/currentDate"

const checkExpiryDate = (dateString2) => {
  const currentDate = new Date() // Get the current date

  const expiryDate = new Date(dateString2)

  // Compare the dates
  if (currentDate.getTime() < expiryDate.getTime()) {
    return true // Expiry date is in the future, date is still valid
  } else {
    return false // Expiry date is in the past, date is expired
  }
}

export default checkExpiryDate

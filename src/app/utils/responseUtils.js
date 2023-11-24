"use client"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const notify = (
  status,
  success = "Operation Successful",
  fail = "Operation failed"
) => {
  if (status === 200) {
    toast.success(success, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // You can set the duration for which the notification will be shown
    })
  } else {
    toast.error(fail, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // You can set the duration for which the notification will be shown
    })
  }
}

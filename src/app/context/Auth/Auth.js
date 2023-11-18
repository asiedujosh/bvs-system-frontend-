import { SUCCESS_STATUS } from "../../constant/requestConstants"
import axios from "../../utils/axios.config"

export const login = async (data) => {
  try {
    let responseOnLogin = await axios.post("/api/login", data)
    if (responseOnLogin.status === SUCCESS_STATUS) {
      return responseOnLogin.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const retrieve = async () => {
  try {
    let responseOnRetrieve = await axios.get("/api/retrieve")
    if (responseOnRetrieve.status === SUCCESS_STATUS) {
      return responseOnRetrieve.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

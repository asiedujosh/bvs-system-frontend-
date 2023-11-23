import { URL, TIMEOUT } from "@/app/constant/requestConstants"
import axios from "axios"
import cookieMethods from "@/app/utils/cookieUtils"

const instance = axios.create({
  baseURL: URL,
  timeout: TIMEOUT,
  withCredentials: true,
  crossDomain: true,
  headers: {
    "x-Requested-with": "XMLHttpRequest",
    Accept: "application/json",
  },
})

let refToken
let data = cookieMethods.getCookies()
if (data) refToken = data.refreshToken

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      ;(async () => {
        const response = await axios.post("/admin/auth/refreshToken", {
          refToken,
        })
        if (response.status === 200) {
          cookieMethods.setCookies(
            response.data.accessToken,
            response.data.refreshToken
          )
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.accessToken}`

          return axios(error.config)
        }
      })()
      return error
    }
  }
)

export default instance

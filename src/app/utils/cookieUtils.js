import Cookies from "universal-cookie"
const cookies = new Cookies()

const cookieMethods = {
  setCookies: (accessToken, refreshToken) => {
    cookies.set("accessToken", accessToken)
    cookies.set("refreshToken", refreshToken)
  },
  getCookies: () => {
    let data = {
      accessToken: cookies.get("accessToken"),
      refreshToken: cookies.get("refreshToken"),
    }
    return data
  },
  deleteCookies: () => {
    cookies.remove("accessToken")
    cookies.remove("refreshToken")
  },
}

export default cookieMethods

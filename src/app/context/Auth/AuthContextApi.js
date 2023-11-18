"use client"

import React, { createContext, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "../../utils/axios.config"
import { login, retrieve } from "./Auth"
import cookieMethods from "../../utils/cookieUtils"

export const AuthApiData = createContext()

const AuthApiDataProvider = (props) => {
  const [userId, setUserId] = useState("")
  const [userProfile, setUserProfile] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const router = useRouter()

  const processLogin = async (data) => {
    let response = await login(data)
    if (response) {
      setUserProfile(response.data.user)
      // set the cookie
      cookieMethods.setCookies(
        response.data.access_token,
        response.data.refresh_token
      )
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`
      setIsAuthenticated(true)
      router.push("/dashboard")
    }
  }

  const processRetrieve = async () => {
    let cookieData = cookieMethods.getCookies()
    if (!cookieData.refreshToken) router.push("/")
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${cookieData.refreshToken}`

    let response = await retrieve()
    if (response) {
      //console.log(response)
      setUserProfile(response.user)
    } else {
      router.push("/")
    }
  }

  return (
    <AuthApiData.Provider
      value={{
        userId,
        setUserId,
        userProfile,
        processLogin,
        isAuthenticated,
        processRetrieve,
      }}
    >
      {props.children}
    </AuthApiData.Provider>
  )
}

export default AuthApiDataProvider

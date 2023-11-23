"use client"

import React, { createContext, useState } from "react"
import { useRouter } from "next/router"
import axios from "@/app/utils/axios.config"
import { login, retrieve, getAllUsers } from "./Auth"
import cookieMethods from "@/app/utils/cookieUtils"

export const AuthApiData = createContext()

const AuthApiDataProvider = (props) => {
  const [allUsers, setAllUsers] = useState([])
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

  const processLogout = async () => {
    cookieMethods.deleteCookies()
    setIsAuthenticated(false)
    router.push("/")
  }

  const processGetAllUsers = async () => {
    let response = await getAllUsers(data)
    if (response) {
      setAllUsers(response.data.users)
      //console.log(response)
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
        processGetAllUsers,
        allUsers,
        processLogout,
      }}
    >
      {props.children}
    </AuthApiData.Provider>
  )
}

export default AuthApiDataProvider

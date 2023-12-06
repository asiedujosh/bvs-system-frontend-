"use client"
import React, { createContext, useState } from "react"
import { notify } from "@/app/utils/responseUtils"
import { BAD_REQUEST_STATUS } from "@/app/constant/requestConstants"
import { useRouter } from "next/navigation"
import axios from "@/app/utils/axios.config"
import { login, retrieve, getAllUsers } from "./Auth"
import cookieMethods from "@/app/utils/cookieUtils"

export const AuthApiData = createContext()

const AuthApiDataProvider = (props) => {
  const [allUsers, setAllUsers] = useState([])
  const [userId, setUserId] = useState("")
  const [userProfile, setUserProfile] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
      setIsLoading(false)
    } else {
      setIsLoading(false)
      notify(BAD_REQUEST_STATUS, "Invalid Username/Password")
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
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </AuthApiData.Provider>
  )
}

export default AuthApiDataProvider

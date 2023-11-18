"use client"
import { AuthApiData } from "../../context/Auth/AuthContextApi.js"
import { useContext, useEffect } from "react"
import Navbar from "../../components/navbar.js"

const Banks = () => {
  const { processRetrieve, isAuthenticated } = useContext(AuthApiData)

  useEffect(() => {
    !isAuthenticated && processRetrieve()
  }, [])
  return (
    <>
      <div className="h-4/5 flex items-center justify-center mt-8 md:mt-0">
        <h2 className="text-white">Company</h2>
      </div>
    </>
  )
}
export default Banks

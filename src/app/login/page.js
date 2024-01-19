"use client"
import { useState, useContext, useEffect } from "react"
import { AuthApiData } from "@/app/context/Auth/AuthContextApi.js"
import { AccessControlData } from "../context/AccessControl/AccessControlContextApi"
import InputField from "@/app/components/inputField.js"
import SubmitBtn from "@/app/components/submitButton.js"
import LoadingBtn from "@/app/components/loadingButton"
import LoadingCard from "@/app/components/loadingCard"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  USERNAME_FIELD,
  PASSWORD_FIELD,
  LOGIN_PAGE_TEXT,
} from "@/app/constant/loginConstants"

export default function Login() {
  const { processLogin, isLoading, setIsLoading } = useContext(AuthApiData)
  const { errorInfo, roleLoad, errorStatus } = useContext(AccessControlData)
  const [formData, setFormData] = useState({
    personnel_id: "",
    password: "",
  })
  const [error, setError] = useState([])

  useEffect(() => {
    if (roleLoad) {
      console.log("waiting .....")
    } else {
      console.log("done")
    }
  }, [roleLoad])

  const handleInputChange = (data, field) => {
    setError([])
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = (e) => {
    setIsLoading(!isLoading)
    e.preventDefault()
    let newErr = []
    if (!formData.personnel_id)
      newErr.push({
        id: USERNAME_FIELD.name,
        name: USERNAME_FIELD.label,
        status: true,
      })

    if (!formData.password)
      newErr.push({
        id: PASSWORD_FIELD.name,
        name: PASSWORD_FIELD.name,
        status: true,
      })

    if (newErr.length > 0) {
      setIsLoading(false)
      setError(newErr)
    } else {
      processLogin(formData)
    }
  }

  // Main content variable
  let mainContent = (
    <main className="flex min-h-screen flex-col items-center justify-between md:py-24">
      <div className="flex items-center justify-center h-1/2 mt-32">
        <div className="bg-white mx-4 sm:w-1/2 h-1/2 sm:h-1/2 md:w-5/6 md:h-5/6 lg:w-5/6 lg:h-4/5 px-6 py-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-center">
            <h5 className="text-lg font-bold text-gray-800 mb-4">
              {LOGIN_PAGE_TEXT.title}
            </h5>
          </div>
          <InputField
            field={USERNAME_FIELD}
            value={formData}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
            errorData={error}
          />
          <InputField
            field={PASSWORD_FIELD}
            value={formData}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
            errorData={error}
          />
          {isLoading ? (
            <LoadingBtn />
          ) : (
            <SubmitBtn
              text={LOGIN_PAGE_TEXT.buttonText}
              submit={handleSubmit}
            />
          )}
        </div>
      </div>
      <ToastContainer />
    </main>
  )

  let loadingContent = (
    <main className="flex min-h-screen flex-col items-center justify-between md:py-24">
      <div className="flex items-center justify-center h-1/2 mt-32">
        <div className="animate-pulse bg-gray-200 p-6 rounded-md shadow-md">
          <div className="h-8 bg-gray-300 w-full mb-4">
            <h6>Bvs System is Loading..................</h6>
          </div>
        </div>
      </div>
    </main>
  )

  return roleLoad ? loadingContent : mainContent
}

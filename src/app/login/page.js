"use client"
import { useState, useContext } from "react"
import { AuthApiData } from "@/app/context/Auth/AuthContextApi.js"
import InputField from "@/app/components/inputField"
import SubmitBtn from "@/app/components/submitButton"
import {
  USERNAME_FIELD,
  PASSWORD_FIELD,
  LOGIN_PAGE_TEXT,
} from "@/app/constant/loginConstants"

export default function Login() {
  const { processLogin } = useContext(AuthApiData)
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    processLogin(formData)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
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
          />
          <InputField
            field={PASSWORD_FIELD}
            value={formData}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
          />
          <SubmitBtn text={LOGIN_PAGE_TEXT.buttonText} submit={handleSubmit} />
        </div>
      </div>
    </main>
  )
}

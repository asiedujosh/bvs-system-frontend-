"use client"
import { useState, useContext, useEffect } from "react"
import { ROLE_TEXT, ROLE_FIELD } from "@/app/constant/roleConstants"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"
import SubmitBtn from "@/app/components/submitButton"
import InputField from "@/app/components/inputField"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddRole = () => {
  const { processAddRole, isLoading } = useContext(AccessControlData)
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    //console.log(formData)
    processAddRole(formData)
  }

  return (
    <>
      <div className="w-98 p-6 bg-gray-100 rounded-lg shadow-md mt-4">
        <h2 className="text-lg font-semibold mb-2">{ROLE_TEXT.title}</h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full">
            <InputField
              field={ROLE_FIELD}
              value={formData}
              defaultVal={""}
              readOnly={""}
              change={(data, field) => {
                handleInputChange(data, field)
              }}
            />
          </div>
          <div className="w-full px-6">
            <div className="mt-6 min-w-full flex items-center justify-center">
              <SubmitBtn text={ROLE_TEXT.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddRole

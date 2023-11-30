"use client"
import { useState, useContext, useEffect } from "react"
import OtherSubHeader from "@/app/components/otherSubHeader"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ADDSTAFF } from "@/app/constant/staffConstants"
import InputField from "@/app/components/inputField"
import SelectField from "@/app/components/selectField"
import SubmitBtn from "@/app/components/submitButton"

const UpdateUser = () => {
  const { staffData, processUpdateStaffProfile, customField } =
    useContext(StaffApiData)
  const [formData, setFormData] = useState({})
  useEffect(() => {
    setFormData({
      personnel_id: staffData && staffData.personnel_id,
      name: staffData && staffData.name,
      contact: staffData && staffData.contact,
      location: staffData && staffData.location,
      email: staffData && staffData.email,
      position: staffData && staffData.position,
    })
  }, [staffData])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    processUpdateStaffProfile(staffData.id, formData)
    setFormData({})
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {/* {COMPANY_TITLE} */} Update User
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  User Details
                  {/* {SUB_COMPANY_TITLE} */}
                </h2>
                <div className="space-y-4">
                  {staffData &&
                    customField.map((item) => {
                      return (
                        <InputField
                          field={item}
                          value={formData}
                          defaultVal={formData[item.name]}
                          change={(data, field) => {
                            handleInputChange(data, field)
                          }}
                        />
                      )
                    })}
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={"Submit"} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default UpdateUser

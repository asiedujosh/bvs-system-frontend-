"use client"
import { useState, useContext, useEffect } from "react"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi"
import { AuthApiData } from "@/app/context/Auth/AuthContextApi.js"
import SettingSubHeader from "@/app/components/settingSubHeader"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ADDSETTINGS } from "@/app/constant/settingConstants"
import InputField from "@/app/components/inputField"
import SubmitBtn from "@/app/components/submitButton"

const Settings = () => {
  const { userProfile } = useContext(AuthApiData)
  const { processChangePassword, staffRole } = useContext(StaffApiData)
  const [formData, setFormData] = useState({})
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    let confirmAdmin = staffRole.filter(
      (item) => item.id == userProfile.position
    )
    confirmAdmin[0].role == "Administrator" && setIsAdmin(true)
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    formData.personnel_id = userProfile && userProfile.personnel_id
    console.log(formData)
    processChangePassword(formData)
  }

  return (
    <>
      {isAdmin && <SettingSubHeader />}

      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDSETTINGS.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {ADDSETTINGS.subTitle}
                  {/* {SUB_COMPANY_TITLE} */}
                </h2>
                <div className="space-y-4">
                  {ADDSETTINGS.fieldDetail.map((item) => {
                    return (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        readOnly={item.readOnly}
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

export default Settings

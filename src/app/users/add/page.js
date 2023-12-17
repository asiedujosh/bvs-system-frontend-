"use client"
import { useState, useContext, useEffect } from "react"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"
import { ADDSTAFF } from "@/app/constant/staffConstants"
import InputField from "@/app/components/inputField"
import SelectField from "@/app/components/selectField"
import SubmitBtn from "@/app/components/submitButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddUser = () => {
  const { allRole } = useContext(AccessControlData)
  const { processAddStaff } = useContext(StaffApiData)
  const [formData, setFormData] = useState({})
  const [selectedRole, setSelectedRole] = useState()
  const [roleOptions, setRoleOptions] = useState([])

  // useEffect(() => {
  //   processGetAllRole()
  // }, [])

  useEffect(() => {
    let roleOp = []
    allRole &&
      allRole.allRole.map((item) => {
        // roleOptions.push(item.role)
        roleOp.push(item.role)
      })
    setRoleOptions(roleOp)
    setSelectedRole(
      allRole && allRole.allRole[0] ? allRole.allRole[0].role : "No role"
    )
    setFormData({
      ...formData,
      position:
        allRole && allRole.allRole[0] ? allRole.allRole[0].role : "No role",
    })
    //console.log(roleOp[0])
  }, [allRole])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSelectChange = (data, field) => {
    let roleData =
      allRole && allRole.allRole.filter((item) => item.role === data)
    setFormData({
      ...formData,
      [field]: roleData && roleData[0] && roleData[0].role,
    })
    setSelectedRole(data)
  }

  const handleSubmit = () => {
    processAddStaff(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDSTAFF.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-4">
                  {ADDSTAFF.fieldDetail.map((item) => {
                    return item.type === "text" ||
                      item.type === "date" ||
                      item.type === "password" ? (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        readOnly={item.readOnly}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    ) : (
                      <SelectField
                        field={item}
                        value={formData}
                        options={roleOptions}
                        change={(data, field) => {
                          handleSelectChange(data, field)
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={ADDSTAFF.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddUser

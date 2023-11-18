"use client"
import OtherSubHeader from "@/app/components/otherSubHeader"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  COMPANY_TITLE,
  SUB_COMPANY_TITLE,
  ADD_COMPANY_LABEL,
} from "@/app/constant/companyConstants"
import InputField from "@/app/components/inputField"
import SubmitBtn from "@/app/components/submitButton"
import { useState, useContext } from "react"

const AddCompany = () => {
  const { processAddCompany } = useContext(OtherApiData)
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    processAddCompany(formData)
    setFormData({})
  }

  return (
    <>
      <OtherSubHeader />
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {COMPANY_TITLE}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {SUB_COMPANY_TITLE}
                </h2>
                <div className="space-y-4">
                  {ADD_COMPANY_LABEL.map((item) => {
                    return item.type === "text" || item.type === "date" ? (
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
                        options={item.options}
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

export default AddCompany

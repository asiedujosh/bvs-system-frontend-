"use client"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import SubHeader from "@/app/components/subHeader.js"
import { ADDCLIENT } from "@/app/constant/IndividualConstants"
import { ADDSERVICE } from "@/app/constant/servicingConstants"
import InputField from "@/app/components/inputField"
import IdField from "@/app/components/idField"
import SelectField from "@/app/components/selectField"
import SubmitBtn from "@/app/components/submitButton"
import UploadImage from "@/app/components/uploadImageField"
import { useState, useContext } from "react"

const AddService = ({ params }) => {
  const { processAddService } = useContext(IndividualApiData)
  const [formData, setFormData] = useState({
    productId: params.productId,
    serviceType: "Purchase",
    dueDate: null,
  })

  // console.log(params.productId)

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    processAddService(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDSERVICE.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-4">
                  <IdField
                    field={ADDCLIENT.constantFields[1]}
                    value={formData.productId}
                  />
                  {ADDSERVICE.fieldDetail1.map((item) => {
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

              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-4">
                  {ADDSERVICE.fieldDetail2.map((item) => {
                    return (
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
                  {(formData.serviceType === "Installation" ||
                    formData.serviceType === "Remove") &&
                    ADDSERVICE.field2Base.map((item) => {
                      return (
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

            <div className="min-w-full flex items-center justify-center">
              <div className="mt-2 w-80 flex items-center justify-center mx-2">
                <SubmitBtn text={ADDSERVICE.buttonText} submit={handleSubmit} />
              </div>
              <div className="mt-2 w-80 flex items-center justify-center mx-2">
                <SubmitBtn text={"Skip"} submit={handleSubmit} color={"skip"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddService

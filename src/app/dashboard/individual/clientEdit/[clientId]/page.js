"use client"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"
import { ADDCLIENT, CLIENT_OPTIONS } from "@/app/constant/IndividualConstants"
import InputField from "@/app/components/inputField"
import IdField from "@/app/components/idField"
import SelectField from "@/app/components/selectField"
import SubmitBtn from "@/app/components/submitButton"
import UploadImage from "@/app/components/uploadImageField"
import { useState, useContext, useEffect } from "react"
import generateUniqueID from "@/app/utils/generateId"
import formatDate from "@/app/utils/formatDate"
import currentDate from "@/app/utils/currentDate"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditClient = ({ params }) => {
  const { clientData, processEditClient } = useContext(IndividualApiData)
  const [formData, setFormData] = useState({
    clientId: params.clientId,
    clientName:
      (clientData && clientData.clientName) ||
      (clientData && clientData.client.clientName),
    clientTel:
      (clientData && clientData.clientTel) ||
      (clientData && clientData.client.clientTel),
    clientLocation:
      (clientData && clientData.clientLocation) ||
      (clientData && clientData.client.clientLocation),
  })

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = (e) => {
    //console.log(formData)
    processEditClient(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">Edit Client</h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {ADDCLIENT.headers[0]}
                </h2>

                <div className="space-y-4">
                  <IdField
                    field={ADDCLIENT.constantFields[0]}
                    value={formData.clientId}
                  />
                  {ADDCLIENT.personalDetails.map((item) => {
                    return (
                      item.name !== "associate" && (
                        <InputField
                          field={item}
                          value={formData}
                          defaultVal={formData[item.name]}
                          readOnly={item.readOnly}
                          change={(data, field) => {
                            handleInputChange(data, field)
                          }}
                        />
                      )
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={ADDCLIENT.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default EditClient

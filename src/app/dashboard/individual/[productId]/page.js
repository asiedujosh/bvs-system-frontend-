"use client"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"
import formatDate from "@/app/utils/formatDate"
import { notify } from "@/app/utils/responseUtils"
import SubHeader from "@/app/components/subHeader.js"
import { ADDCLIENT } from "@/app/constant/IndividualConstants"
import { ADDSERVICE } from "@/app/constant/servicingConstants"
import InputField from "@/app/components/inputField"
import IdField from "@/app/components/idField"
import SelectField from "@/app/components/selectField"
import SubmitBtn from "@/app/components/submitButton"
import UploadImage from "@/app/components/uploadImageField"
import { useEffect, useState, useContext } from "react"

const AddService = ({ params }) => {
  const { processAddService, recordTable } = useContext(IndividualApiData)
  const { processGetAllPackage, packageList } = useContext(OtherApiData)
  const [packageOptions, setPackageOptions] = useState([])
  const [formData, setFormData] = useState({
    productId: params.productId,
    package: null,
  })

  useEffect(() => {
    processGetAllPackage()
  }, [])

  useEffect(() => {
    if (packageList.length > 0) {
      let data = []
      packageList.map((item) => data.push(item.packageName))
      setPackageOptions(data)
      setFormData({ ...formData, package: packageOptions[0] })
    }
  }, [packageList])

  //Add ExpiryDate
  let expiryDate = (startDate, monthsToAdd) => {
    const dateObject = new Date(startDate)
    const newDate = new Date(
      dateObject.getFullYear(),
      dateObject.getMonth() + monthsToAdd,
      dateObject.getDate()
    )
    return formatDate(newDate)
    //console.log(formatDate(newDate))
  }

  // console.log(params.productId)
  //Calculate the expiring Date
  let calculateMonth = (packPrice, packMonth, startDate) => {
    let noOfMonth = formData.amtPaid / packPrice / packMonth
    return expiryDate(startDate, noOfMonth)
  }

  //Filter and get expiry date of product
  let itemInQuestion = (packPrice, packMonth) => {
    let proInfo = recordTable.data.filter(
      (item) => item.productId == params.productId
    )
    let expiryDate = proInfo[0].expireDate
    let dateData = {
      startDate: expiryDate,
      newExpireDate: calculateMonth(packPrice, packMonth, expiryDate),
    }
    return dateData
  }

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = packageList.filter(
      (item) => item.packageName == formData.package
    )
    let dateData = itemInQuestion(data[0].packagePrice, data[0].packageMonth)
    formData.startDate = dateData.startDate
    formData.expireDate = dateData.newExpireDate
    //(itemInQuestion())
    console.log(formData)
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
                    return item.type === "text" ||
                      item.type === "date" ||
                      item.type === "number" ? (
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
                        options={packageOptions}
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddService

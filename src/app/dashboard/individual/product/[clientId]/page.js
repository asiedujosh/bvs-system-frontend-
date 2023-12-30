"use client"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import SubHeader from "@/app/components/subHeader.js"
import { ADDCLIENT } from "@/app/constant/IndividualConstants"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi"
import InputField from "@/app/components/inputField"
import IdField from "@/app/components/idField"
import formatDate from "@/app/utils/formatDate"
import SelectField from "@/app/components/selectField"
import SubmitBtn from "@/app/components/submitButton"
import UploadImage from "@/app/components/uploadImageField"
import generateUniqueID from "@/app/utils/generateId"
import { useState, useContext, useEffect } from "react"
import currentDate from "@/app/utils/currentDate"

const AddProduct = ({ params }) => {
  const {
    clientData,
    processAddProduct,
    individualTable,
    products,
    holdAssociateData,
  } = useContext(IndividualApiData)
  const { processGetAllPackage, packageList } = useContext(OtherApiData)
  const { processGetAllStaff, staffList } = useContext(StaffApiData)
  const [packageOptions, setPackageOptions] = useState([])
  const [techOfficerOptions, setTechOfficerOptions] = useState([])
  const [formData, setFormData] = useState({
    productId: generateUniqueID("pro"),
    carType: ADDCLIENT.carDetails[0].options[0],
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
    associate: holdAssociateData && holdAssociateData.associate,
    companyName: holdAssociateData && holdAssociateData.companyName,
    technicalOfficer: null,
    purchaseType: ADDCLIENT.productDetails[2].options[0],
    package: null,
    plateform: ADDCLIENT.productDetails[5].options[0],
    requestDate: currentDate(),
  })

  useEffect(() => {
    if (packageList.length > 0) {
      let data = []
      packageList.map((item) => data.push(item.packageName))
      // console.log(data)
      setPackageOptions(data)
      setFormData({ ...formData, package: packageOptions[0] })
    }
  }, [packageList])

  useEffect(() => {
    if (staffList.length > 0) {
      let data = []
      staffList.map((item) => {
        if (item.position.toLowerCase().includes("tech")) data.push(item.name)
      })
      setTechOfficerOptions(data)
      setFormData({ ...formData, technicalOfficer: techOfficerOptions[0] })
    }
  }, [staffList])

  useEffect(() => {
    processGetAllPackage()
    processGetAllStaff()
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

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

  //Calculate the expiring Date
  let calculateMonth = (packPrice, packMonth) => {
    let noOfMonth = formData.amtPaid / packPrice / packMonth
    return expiryDate(formData.startDate, noOfMonth)
  }

  //get package to calculate expiring Date
  let getPackage = (pack) => {
    let packageObject = packageList.filter((item) => item.packageName === pack)
    let packPrice = packageObject[0].packagePrice
    let packMonth = packageObject[0].packageMonth
    return calculateMonth(packPrice, packMonth)
    //console.log(packageObject)
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    formData.expireDate = getPackage(formData.package)
    processAddProduct(formData)
  }

  return (
    <>
      <SubHeader />
      <div className="checkPoint3">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              Add Products
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-row mt-6">
            {/* Card 1 */}
            <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 mb-10 md:mt-0 md:m-2">
              <h2 className="text-lg font-semibold mb-2">
                {ADDCLIENT.headers[1]}
              </h2>
              <div className="space-y-4">
                {ADDCLIENT.carDetails.map((item) => {
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
                <div>
                  <UploadImage
                    change={(data, field) => {
                      handleInputChange(data, field)
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
              <h2 className="text-lg font-semibold mb-2">
                {ADDCLIENT.headers[2]}
              </h2>
              <div className="space-y-4">
                <IdField
                  field={ADDCLIENT.constantFields[0]}
                  value={clientData.clientId || clientData.client.clientId}
                />
                {ADDCLIENT.productDetails.map((item) => {
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
                      options={
                        item.name === "package"
                          ? packageOptions
                          : item.name === "technicalOfficer"
                          ? techOfficerOptions
                          : item.options
                      }
                      change={(data, field) => {
                        handleInputChange(data, field)
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-2 mb-20 min-w-full flex items-center justify-center">
            <SubmitBtn text={ADDCLIENT.buttonText} submit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct

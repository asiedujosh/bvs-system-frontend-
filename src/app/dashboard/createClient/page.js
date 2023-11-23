"use client"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi"
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

const AddClients = () => {
  const { processAddClient } = useContext(IndividualApiData)
  const { processGetAllStaff, staffList } = useContext(StaffApiData)
  const {
    processGetAllCompany,
    companyList,
    processGetAllPackage,
    packageList,
  } = useContext(OtherApiData)
  const [companyOptions, setCompanyOptions] = useState([])
  const [packageOptions, setPackageOptions] = useState([])
  const [techOfficerOptions, setTechOfficerOptions] = useState([])
  const [formData, setFormData] = useState({
    clientId: generateUniqueID("bvs"),
    productId: generateUniqueID("pro"),
    carType: ADDCLIENT.carDetails[0].options[0],
    associate: ADDCLIENT.personalDetails[3].options[0],
    companyName: null,
    technicalOfficer: null,
    purchaseType: ADDCLIENT.productDetails[2].options[0],
    package: null,
    plateform: ADDCLIENT.productDetails[5].options[0],
    requestDate: currentDate(),
  })

  useEffect(() => {
    processGetAllCompany()
    processGetAllPackage()
    processGetAllStaff()
  }, [])

  useEffect(() => {
    if (companyList.length > 0) {
      let data = []
      companyList.map((item) => data.push(item.companyName))
      setCompanyOptions(data)
    }
  }, [companyList])

  useEffect(() => {
    if (packageList.length > 0) {
      let data = []
      packageList.map((item) => data.push(item.packageName))
      setPackageOptions(data)
      setFormData({ ...formData, package: packageOptions[0] })
    }
  }, [packageList])

  useEffect(() => {
    if (staffList.length > 0) {
      let data = []
      let techOfficers = staffList.filter(
        (item) => item.position === "Tech Officer"
      )
      techOfficers.map((item) => data.push(item.name))
      setTechOfficerOptions(data)
      setFormData({ ...formData, technicalOfficer: techOfficerOptions[0] })
    }
  }, [staffList])

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
    formData.associate === ADDCLIENT.personalDetails[3].options[1] &&
      formData.companyName === null &&
      setFormData({
        ...formData,
        companyName: companyOptions.length > 0 ? companyOptions[0] : null,
      })
    formData.expireDate = getPackage(formData.package)
    // let expiryDate = getPackage(formData.package)
    console.log(formData)
    processAddClient(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDCLIENT.title}
            </h2>
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
                  {formData.associate !==
                    ADDCLIENT.personalDetails[3].options[0] && (
                    <SelectField
                      field={CLIENT_OPTIONS[0]}
                      value={formData}
                      options={companyOptions}
                      change={(data, field) => {
                        handleInputChange(data, field)
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
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

              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {ADDCLIENT.headers[2]}
                </h2>
                <div className="space-y-4">
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

export default AddClients

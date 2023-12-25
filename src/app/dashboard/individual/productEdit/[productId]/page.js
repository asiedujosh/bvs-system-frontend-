"use client"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import SubHeader from "@/app/components/subHeader.js"
import { ADDCLIENT } from "@/app/constant/IndividualConstants"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi"
import InputField from "@/app/components/inputField"
import IdField from "@/app/components/idField"
import SelectField from "@/app/components/selectField"
import SubmitBtn from "@/app/components/submitButton"
import UploadImage from "@/app/components/uploadImageField"
import generateUniqueID from "@/app/utils/generateId"
import { useState, useContext, useEffect } from "react"
import currentDate from "@/app/utils/currentDate"

const EditProduct = ({ params }) => {
  const { clientData, processAddProduct, products } =
    useContext(IndividualApiData)
  const { staffList } = useContext(StaffApiData)
  const [packageOptions, setPackageOptions] = useState([])
  const [techOfficerOptions, setTechOfficerOptions] = useState([])
  const [newProducts, setNewProducts] = useState([])
  const [formData, setFormData] = useState({
    productId: params.productId,
    technicalOfficer: null,
    carBrand: null,
    carColor: null,
    carImage: null,
    carType: null,
    chasisNo: null,
    deviceNo: null,
    plateNo: null,
    simNo: null,
    plateform: ADDCLIENT.productDetails[5].options[0],
    requestDate: currentDate(),
  })

  useEffect(() => {
    let editProduct =
      products &&
      products.products.filter((item) => item.productId === params.productId)

    setFormData({
      ...formData,
      carBrand: editProduct[0].carBrand,
      carColor: editProduct[0].carColor,
      carImage: editProduct[0].carImage,
      carType: editProduct[0].carType,
      chasisNo: editProduct[0].chasisNo,
      deviceNo: editProduct[0].deviceNo,
      plateNo: editProduct[0].plateNo,
      simNo: editProduct[0].simNo,
      technicalOfficer: editProduct[0].technicalOfficer,
    })

    let newPro = ADDCLIENT.productDetails.filter(
      (item) =>
        item.name !== "package" &&
        item.name !== "amtPaid" &&
        item.name !== "startDate"
    )

    setNewProducts(newPro)
  }, [])

  //   let productData = []

  //   useEffect(() => {
  //     let productInfo = products.filter(
  //       (item) => item.productId === param.productId
  //     )
  //     console.log(productInfo)
  //   }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  useEffect(() => {
    if (staffList.length > 0) {
      let data = []
      let techOfficers = staffList.filter(
        (item) => item.position === "Tech Officer"
      )
      if (techOfficers.length > 0) {
        techOfficers.map((item) => data.push(item.name))
        console.log(data)
        setTechOfficerOptions(data)
        setFormData({ ...formData, technicalOfficer: techOfficerOptions[0] })
      } else {
        //setTechOfficerOptions()
        setFormData({ ...formData, technicalOfficer: null })
      }
    }
  }, [staffList])

  const handleSubmit = (e) => {
    // e.preventDefault()
    formData.expireDate = getPackage(formData.package)
    console.log(formData)
    processAddProduct(formData)
  }

  return (
    <>
      <SubHeader />
      <div className="checkPoint3">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              Edit Product
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
                      defaultVal={formData[item.name]}
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
                {newProducts.map((item) => {
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

export default EditProduct

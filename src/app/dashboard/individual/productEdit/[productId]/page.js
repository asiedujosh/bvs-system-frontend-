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
  const { clientData, processEditProduct, editProductInfo } =
    useContext(IndividualApiData)
  const { staffList } = useContext(StaffApiData)
  const [packageOptions, setPackageOptions] = useState([])
  const [techOfficerOptions, setTechOfficerOptions] = useState([])
  const [newProducts, setNewProducts] = useState([])
  const [formData, setFormData] = useState({
    productId: editProductInfo && editProductInfo.productId,
    technicalOfficer: editProductInfo && editProductInfo.technicalOfficer,
    carBrand: editProductInfo && editProductInfo.carBrand,
    carColor: editProductInfo && editProductInfo.carColor,
    carImage: editProductInfo && editProductInfo.carImage,
    carType: editProductInfo && editProductInfo.carType,
    chasisNo: editProductInfo && editProductInfo.chasisNo,
    deviceNo: editProductInfo && editProductInfo.deviceNo,
    plateNo: editProductInfo && editProductInfo.plateNo,
    simNo: editProductInfo && editProductInfo.simNo,
    plateform: ADDCLIENT.productDetails[5].options[0],
    //requestDate: currentDate(),
  })

  // console.log(editProductInfo && editProductInfo)

  useEffect(() => {
    let newPro = ADDCLIENT.productDetails.filter(
      (item) =>
        item.name !== "package" &&
        item.name !== "amtPaid" &&
        item.name !== "startDate"
    )

    setFormData({
      ...formData,
      productId: editProductInfo && editProductInfo.productId,
      technicalOfficer: editProductInfo && editProductInfo.technicalOfficer,
      carBrand: editProductInfo && editProductInfo.carBrand,
      carColor: editProductInfo && editProductInfo.carColor,
      carImage: editProductInfo && editProductInfo.carImage,
      carType: editProductInfo && editProductInfo.carType,
      chasisNo: editProductInfo && editProductInfo.chasisNo,
      deviceNo: editProductInfo && editProductInfo.deviceNo,
      plateNo: editProductInfo && editProductInfo.plateNo,
      simNo: editProductInfo && editProductInfo.simNo,
    })

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
      staffList.map((item) => {
        if (item.position.toLowerCase().includes("tech")) data.push(item.name)
      })
      setTechOfficerOptions(data)
      setFormData({ ...formData, technicalOfficer: techOfficerOptions[0] })
    }
  }, [staffList])

  const handleSubmit = (e) => {
    // e.preventDefault()
    // console.log(formData)
    processEditProduct(formData)
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
                      defaultVal={editProductInfo && editProductInfo[item.name]}
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
                      defaultVal={editProductInfo && editProductInfo[item.name]}
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

"use client"
import { useRouter } from "next/navigation"
import React, { useState, useContext } from "react"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import {
  UsersIcon,
  MapIcon,
  IdentificationIcon,
  PhoneIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid"
import ServiceTable from "@/app/components/serviceTable"

const ProfileSection = () => {
  const { serviceList, clientData } = useContext(IndividualApiData)
  const router = useRouter()
  console.log(clientData)
  // Sample profile data
  return (
    <div className="w-full h-full p-4 sm:p-6 md:p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Profile Section
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="sm:grid sm:grid-cols-1 sm:gap-2">
          <div className="flex items-center mb-2 sm:flex-row sm:mb-0">
            <UsersIcon className="w-6 h-6 mr-2 text-black" />
            <p className="text-xl font-semibold">
              {clientData.clientName || clientData.client.clientName}
            </p>
          </div>
          <div className="flex items-center mb-2 sm:flex-row sm:mb-0">
            <button
              onClick={() => {
                router.push(
                  `/dashboard/individual/product/${
                    clientData.clientId || clientData.client.clientId
                  }`
                )
              }}
              className="w-full md:w-1/4 bg-green-500 text-white py-2 rounded-md transition duration-300"
            >
              New Product
            </button>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
          <div className="flex items-center mb-2 sm:flex-row sm:mb-0">
            <IdentificationIcon className="w-6 h-6 mr-2 text-black" />
            <p className="text-lg">
              {clientData.clientId || clientData.client.clientId}
            </p>
          </div>
          <div className="flex items-center mb-2 sm:flex-row sm:mb-0">
            <MapIcon className="w-6 h-6 mr-2 text-black" />
            <p className="text-lg">
              {clientData.clientLocation || clientData.client.clientLocation}
            </p>
          </div>
          <div className="flex items-center mb-2 sm:flex-row sm:mb-0">
            <PhoneIcon className="w-6 h-6 mr-2 text-black" />
            <p className="text-lg">
              {clientData.clientTel || clientData.client.clientTel}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ImagePreview = ({ imageSrc }) => {
  return (
    <div className="w-full md:w-1/5">
      <img
        src={imageSrc}
        alt="Car Image"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  )
}

const CarProductCard = ({ title, details }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-2xl font-semibold text-center mb-4 relative">
        {title}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="12" x2="18" y2="12" />
          </svg>
        </div>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-start">
        {details.map((item, index) => (
          <div key={index}>
            <p className="text-base font-semibold">{item.label}:</p>
            <p className="text-lg">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const ProductSection = ({ productInfo }) => {
  const { serviceList, clientData, products } = useContext(IndividualApiData)
  console.log(products)
  const [isTableVisible, setTableVisible] = useState(false)
  const router = useRouter()
  let filteredService = serviceList.services.filter(
    (item) => item.productId === productInfo.productId
  )

  // Sample product data
  const carDetails = [
    {
      label: "Car Type",
      value: productInfo.carType,
    },
    {
      label: "Car Color",
      value: productInfo.carColor,
    },
    {
      label: "Plate No",
      value: productInfo.plateNo,
    },
    {
      label: "Chasis No",
      value: productInfo.chasisNo,
    },
    {
      label: "Request Date",
      value: productInfo.requestDate,
    },
  ]

  const productDetails = [
    {
      label: "Product Id",
      value: productInfo.productId,
    },
    {
      label: "Status",
      value: productInfo.action,
    },
    {
      label: "Sim No",
      value: productInfo.simNo,
    },
    {
      label: "Device No",
      value: productInfo.deviceNo,
    },
    {
      label: "Purchase Type",
      value: productInfo.purchaseType,
    },
    {
      label: "Package",
      value: productInfo.package,
    },
    {
      label: "Request Date",
      value: productInfo.requestDate,
    },
    {
      label: "Plateform",
      value: productInfo.plateform,
    },
  ]

  const toggleTableVisibility = () => {
    setTableVisible(!isTableVisible)
  }

  const addServiceRoute = () => {
    router.push(`/dashboard/individual/${productDetails[0].value}`)
  }

  return (
    <div className="w-full h-full p-4 sm:p-6 md:p-8 bg-white rounded-md shadow-md mt-6">
      <div className="flex flex-wrap">
        <ImagePreview imageSrc={productInfo.carImage} />
        <div className="w-full md:w-2/5 p-4">
          <CarProductCard title="Car Information" details={carDetails} />
          <div className="mt-4">
            <button
              onClick={() => {
                addServiceRoute()
              }}
              className="w-full bg-green-500 text-white py-2 rounded-md transition duration-300"
            >
              Add Service
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/5 p-4">
          <CarProductCard
            title="Product Information"
            details={productDetails}
          />
        </div>
      </div>
      <div className="w-full mt-4 text-center">
        <button
          onClick={toggleTableVisibility}
          className="w-full bg-gray-800 text-white py-2 rounded-md transition duration-300"
        >
          {isTableVisible ? "Hide Service" : "Show Service"}
        </button>
      </div>
      {isTableVisible && (
        <div className="w-full mt-4">
          <ServiceTable serviceInfo={filteredService} />
        </div>
      )}
    </div>
  )
}

const ProfilePage = () => {
  const { serviceList, clientData, products } = useContext(IndividualApiData)
  console.log(products)

  return (
    <div className="container mx-auto w-11/12 h-full p-4 sm:p-6 md:p-8">
      <div className="overflow-auto" style={{ height: "80%" }}>
        <ProfileSection />
        {products ? (
          products.products.map((item) => <ProductSection productInfo={item} />)
        ) : (
          <div className="text-white">No products available</div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage

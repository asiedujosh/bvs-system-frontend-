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
import IdField from "@/app/components/idField"
import SubmitBtn from "@/app/components/submitButton"
import { useState, useContext } from "react"

const ViewCompany = () => {
  const { companyData } = useContext(OtherApiData)

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {/* {COMPANY_TITLE} */} View Company
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {" "}
                  Company Details
                  {/* {SUB_COMPANY_TITLE} */}
                </h2>
                <div className="space-y-4">
                  {ADD_COMPANY_LABEL.map((item) => {
                    return (
                      <IdField
                        field={item.label}
                        value={companyData[item.name]}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default ViewCompany

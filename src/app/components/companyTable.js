"use client"
import React, { useContext, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Link from "next/link"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"

const CompanyTable = ({ tableHeader, tableInfo }) => {
  const {
    searchCompanyRecord,
    processViewCompanyProfile,
    processViewCompanyUpdateProfile,
    processDeleteCompany,
  } = useContext(OtherApiData)

  useEffect(() => {
    console.log(searchCompanyRecord)
  }, [searchCompanyRecord])

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {tableHeader.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchCompanyRecord &&
            searchCompanyRecord.map((item) => (
              <tr key={item.id} className="border-t border-gray-200 col-span-3">
                <td class="w-3/4 border border-gray-200 py-4 px-2">
                  {item.companyName}
                </td>
                <td className="w-1/4 border border-gray-200 py-4 px-2">
                  <div className="flex space-x-2">
                    <span
                      onClick={() => {
                        processViewCompanyProfile(item.id)
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      View
                    </span>
                    <span
                      onClick={() => {
                        processUpdateCompanyProfile(item.id)
                      }}
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Edit
                    </span>
                    <span
                      onClick={() => {
                        processDeleteCompany(item.id)
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}

          {!searchCompanyRecord &&
            (tableInfo ? (
              tableInfo.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 col-span-3"
                >
                  <td className="w-3/4 border border-gray-200 py-4 px-2">
                    {item.companyName}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <span
                        onClick={() => {
                          processViewCompanyProfile(item.id)
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        View
                      </span>
                      <span
                        onClick={() => {
                          processViewCompanyUpdateProfile(item.id)
                        }}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </span>
                      <span
                        onClick={() => {
                          processDeleteCompany(item.id)
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-gray-200">
                <td className="border border-gray-200 py-4 px-2 text-white">
                  Records Currently Not Available
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ToastContainer />
    </>
  )
}

export default CompanyTable

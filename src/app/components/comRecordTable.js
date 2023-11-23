"use client"
import React, { useContext, useEffect } from "react"
import Link from "next/link"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"
import { IndividualApiData } from "../context/Individual/IndividualContextApi"

const ComRecordTable = ({ tableHeader, tableInfo }) => {
  const { processViewProductsUnderCompany } = useContext(IndividualApiData)
  const { companyList } = useContext(OtherApiData)

  //   useEffect(() => {
  //     console.log(searchCompanyRecord)
  //   }, [searchCompanyRecord])

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
          {tableInfo ? (
            tableInfo.map((item) => (
              <tr key={item.id} className="border-t border-gray-200 col-span-3">
                {companyList.map((company) => {
                  if (company.id == item.companyName) {
                    return (
                      <td className="w-3/4 border border-gray-200 py-4 px-2">
                        {company.companyName}
                      </td>
                    )
                  }
                })}
                <td className="w-3/4 border border-gray-200 py-4 px-2">
                  {item.totalProducts}
                </td>
                <td className="w-1/4 border border-gray-200 py-4 px-2">
                  <div className="flex space-x-2">
                    <span
                      onClick={() => {
                        processViewProductsUnderCompany(item.companyName)
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      View
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
          )}
        </tbody>
      </table>
    </>
  )
}

export default ComRecordTable

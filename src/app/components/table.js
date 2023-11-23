"use client"
import React, { useContext, useEffect } from "react"
import checkExpiryDate from "../utils/checkExpiryDate"
import daysLeft from "../utils/daysLeft"
import readableDate from "../utils/readableDate"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"

const Table = ({ tableHeader, tableInfo }) => {
  const { processGetProfile, searchRecord } = useContext(IndividualApiData)
  useEffect(() => {
    console.log(searchRecord)
  }, [searchRecord])

  let viewProfile = (id) => {
    processGetProfile(id)
  }

  return (
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
        {searchRecord &&
          searchRecord.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="border border-gray-200 py-4 px-2">
                {item.productId}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {item.clientName}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {item.clientTel}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {item.package}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {readableDate(item.startDate)}
              </td>
              <td
                className={`border border-gray-200 py-4 px-2 
              ${
                checkExpiryDate(item.expireDate)
                  ? "text-red-500"
                  : " text-green-500"
              }`}
              >
                {`${item.expireDate ? readableDate(item.expireDate) : "None"}`}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {daysLeft(item.expireDate)}
              </td>
              <td className={`border border-gray-200 py-4 px-2`}>
                {item.status}
              </td>
              <td className={`border border-gray-200 py-4 px-2`}>
                {item.state}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                <span
                  onClick={() => {
                    viewProfile(item.clientId)
                  }}
                >
                  View
                </span>
              </td>
            </tr>
          ))}

        {!searchRecord &&
          (tableInfo ? (
            tableInfo.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="border border-gray-200 py-4 px-2">
                  {item.productId}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {item.clientName}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {item.clientTel}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {item.package}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {readableDate(item.startDate)}
                </td>
                <td
                  className={`border border-gray-200 py-4 px-2 
              ${
                checkExpiryDate(item.expireDate)
                  ? "text-red-500"
                  : " text-green-500"
              }`}
                >
                  {`${
                    item.expireDate ? readableDate(item.expireDate) : "None"
                  }`}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {daysLeft(item.expireDate)}
                </td>
                <td className={`border border-gray-200 py-4 px-2`}>
                  {item.status}
                </td>
                <td className={`border border-gray-200 py-4 px-2`}>
                  {item.state}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  <span
                    onClick={() => {
                      viewProfile(item.clientId)
                    }}
                  >
                    View
                  </span>
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
  )
}

export default Table

"use client"
import React, { useContext, useEffect } from "react"
import { STAFFTABLE } from "@/app/constant/staffConstants"
import { StaffApiData } from "@/app/context/Staff/StaffContextApi"

const StaffTable = ({ staffInfo }) => {
  const {
    processViewStaffProfile,
    processViewStaffUpdateProfile,
    processDeleteStaff,
  } = useContext(StaffApiData)
  // useEffect(() => {
  //   console.log(searchPackageRecord)
  // }, [searchPackageRecord])

  return (
    <table className="w-full table-auto rounded">
      <thead className="sticky top-0 z-10 bg-gray-100">
        <tr>
          {STAFFTABLE.map((item) => (
            <th className="border border-gray-200 py-4 px-2">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody
        className="w-full overflow-y-auto"
        style={{ maxHeight: "calc(80% - 3.5rem)" }}
      >
        {staffInfo.map((item) => (
          <tr className="border-t border-gray-200">
            <td className="border border-gray-200 py-4 px-2">
              {item.personnel_id}
            </td>
            <td className="border border-gray-200 py-4 px-2">{item.name}</td>
            <td className="border border-gray-200 py-4 px-2">{item.contact}</td>
            <td className="border border-gray-200 py-4 px-2">
              {item.position}
            </td>
            <td className="w-1/4 border border-gray-200 py-4 px-2">
              <div className="flex space-x-2">
                <span
                  onClick={() => {
                    processViewStaffProfile(item.id)
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  View
                </span>
                <span
                  onClick={() => {
                    processViewStaffUpdateProfile(item.id)
                  }}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Edit
                </span>
                <span
                  onClick={() => {
                    processDeleteStaff(item.id)
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Delete
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StaffTable

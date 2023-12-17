"use client"
import React, { useContext, useEffect } from "react"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"

const PackageTable = ({ tableHeader, tableInfo }) => {
  const { singlePackagePermission } = useContext(AccessControlData)
  const {
    processViewPackageProfile,
    processViewPackageUpdateProfile,
    processDeletePackage,
    searchPackageRecord,
  } = useContext(OtherApiData)
  // useEffect(() => {
  //   console.log(searchPackageRecord)
  // }, [searchPackageRecord])

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
        {searchPackageRecord &&
          searchPackageRecord.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="border border-gray-200 py-4 px-2">
                {item.packageName}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                GH {item.price}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {item.details}
              </td>
              <td className="w-1/4 border border-gray-200 py-4 px-2">
                <div className="flex space-x-2">
                  {singlePackagePermission.singlePackagePermission.view !==
                  0 ? (
                    <span
                      onClick={() => {
                        processViewPackageProfile(item.id)
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      View
                    </span>
                  ) : (
                    <span className="text-gray-200"> View </span>
                  )}

                  {singlePackagePermission.singlePackagePermission.update !==
                  0 ? (
                    <span
                      onClick={() => {
                        processViewPackageUpdateProfile(item.id)
                      }}
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Edit
                    </span>
                  ) : (
                    <span className="text-gray-200"> | Update | </span>
                  )}

                  {singlePackagePermission.singlePackagePermission.delete !==
                  0 ? (
                    <span
                      onClick={() => {
                        processDeletePackage(item.id)
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Delete
                    </span>
                  ) : (
                    <span className="text-gray-200"> Delete </span>
                  )}
                </div>
              </td>
            </tr>
          ))}

        {!searchPackageRecord &&
          (tableInfo ? (
            tableInfo.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="border border-gray-200 py-4 px-2">
                  {item.packageName}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  GH {item.packagePrice}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {item.packageDetails}
                </td>
                <td className="w-1/4 border border-gray-200 py-4 px-2">
                  <div className="flex space-x-2">
                    {singlePackagePermission.singlePackagePermission.view !==
                    0 ? (
                      <span
                        onClick={() => {
                          processViewPackageProfile(item.id)
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        View
                      </span>
                    ) : (
                      <span className="text-gray-200"> View </span>
                    )}

                    {singlePackagePermission.singlePackagePermission.update !==
                    0 ? (
                      <span
                        onClick={() => {
                          processViewPackageUpdateProfile(item.id)
                        }}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </span>
                    ) : (
                      <span className="text-gray-200"> | Update | </span>
                    )}

                    {singlePackagePermission.singlePackagePermission.delete !==
                    0 ? (
                      <span
                        onClick={() => {
                          processDeletePackage(item.id)
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Delete
                      </span>
                    ) : (
                      <span className="text-gray-200"> Delete </span>
                    )}
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
  )
}

export default PackageTable

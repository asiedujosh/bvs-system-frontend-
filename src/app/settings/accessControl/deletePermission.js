import { useState, useContext, useEffect } from "react"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const DeletePermission = () => {
  const { processDeleteRole, allRole } = useContext(AccessControlData)

  const handleDelete = (id) => {
    processDeleteRole(id)
    //console.log(data)
  }

  return (
    <>
      <div className="w-98 p-6 bg-gray-100 rounded-lg shadow-md mt-4">
        <div className="mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Label</th>
                <th className="py-2 px-4 border-b">Activity</th>
              </tr>
            </thead>
            <tbody>
              {allRole &&
                allRole.allRole.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b w-4/5">{item.role}</td>
                    <td className="py-2 px-4 border-b w-1/5">
                      <button
                        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          handleDelete(item.id)
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default DeletePermission

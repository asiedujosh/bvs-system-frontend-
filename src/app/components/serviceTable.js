"use client"
import { SERVICETABLE } from "@/app/constant/servicingConstants"

const ServiceTable = ({ serviceInfo }) => {
  return (
    <table className="w-full table-auto rounded">
      <thead className="sticky top-0 z-10 bg-gray-100">
        <tr>
          {SERVICETABLE.map((item) => (
            <th className="border border-gray-200 py-4 px-2">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody
        className="w-full overflow-y-auto"
        style={{ maxHeight: "calc(80% - 3.5rem)" }}
      >
        {serviceInfo &&
          serviceInfo.map((item) => (
            <tr className="border-t border-gray-200">
              <td className="border border-gray-200 py-4 px-2">
                {item.startDate}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {item.expireDate ? item.expireDate : "None"}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                GH {item.amtPaid}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                <button
                  onClick={() => {
                    console.log("client Delete")
                  }}
                  className="w-3/4 bg-red-600 text-white py-2 mx-2 rounded-md transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default ServiceTable

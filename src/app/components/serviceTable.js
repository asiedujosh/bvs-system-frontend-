import { SERVICETABLE } from "../constant/servicingConstants"

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
        {serviceInfo.map((item) => (
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
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ServiceTable

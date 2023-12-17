"use client"
import { useState, useContext, useEffect } from "react"
import SubmitBtn from "@/app/components/submitButton"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"
import { PERMISSION_ROLE } from "@/app/constant/roleConstants"
import SelectField from "@/app/components/selectField"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddPermission = () => {
  const {
    allRole,
    clientPermission,
    companyPermission,
    packagePermission,
    userPermission,
    processUpdatePermission,
  } = useContext(AccessControlData)

  const [formData, setFormData] = useState({})
  const [selectedRole, setSelectedRole] = useState()
  const [roleOptions, setRoleOptions] = useState([])
  const [data, setData] = useState([
    {
      label: "Company",
      create: true,
      read: false,
      update: false,
      delete: false,
    },
    {
      label: "Users",
      create: false,
      read: false,
      update: false,
      delete: false,
    },
    {
      label: "Package",
      create: false,
      read: false,
      update: false,
      delete: false,
    },
    {
      label: "Clients",
      create: false,
      read: false,
      update: false,
      delete: false,
    },
  ])

  useEffect(() => {
    let roleOp = []
    allRole &&
      allRole.allRole.map((item) => {
        // roleOptions.push(item.role)
        roleOp.push(item.role)
      })
    setRoleOptions(roleOp)
    setSelectedRole(allRole && allRole[0] ? allRole.allRole[0].role : "No role")
    //console.log(roleOp[0])
  }, [allRole])

  useEffect(() => {
    //console.log(clientPermission)
    let clientPermData =
      allRole &&
      clientPermission &&
      clientPermission.clientPermission.filter(
        (item) => item.role_id == allRole.allRole[0].id
      )
    //console.log(allRole && allRole.allRole[0].id)
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.label === "Clients") {
          // Update the properties as needed
          return {
            ...item,
            create:
              clientPermData && clientPermData[0]
                ? clientPermData[0].create !== 0
                  ? true
                  : false
                : false,
            read:
              clientPermData && clientPermData[0]
                ? clientPermData[0].view !== 0
                  ? true
                  : false
                : false,
            update:
              clientPermData && clientPermData[0]
                ? clientPermData[0].update !== 0
                  ? true
                  : false
                : false,
            delete:
              clientPermData && clientPermData[0]
                ? clientPermData[0].delete !== 0
                  ? true
                  : false
                : false,
          }
        }
        return item
      })
    })
  }, [clientPermission])

  useEffect(() => {
    //console.log(companyPermission)
    let companyPermData =
      allRole &&
      companyPermission &&
      companyPermission.companyPermission.filter(
        (item) => item.role_id == allRole.allRole[0].id
      )
    //console.log(clientPermData)
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.label === "Company") {
          // Update the properties as needed
          return {
            ...item,
            create:
              companyPermData && companyPermData[0]
                ? companyPermData[0].create !== 0
                  ? true
                  : false
                : false,
            read:
              companyPermData && companyPermData[0]
                ? companyPermData[0].view !== 0
                  ? true
                  : false
                : false,
            update:
              companyPermData && companyPermData[0]
                ? companyPermData[0].update !== 0
                  ? true
                  : false
                : false,
            delete:
              companyPermData && companyPermData[0]
                ? companyPermData[0].delete !== 0
                  ? true
                  : false
                : false,
          }
        }
        return item
      })
    })
  }, [companyPermission])

  useEffect(() => {
    //console.log(packagePermission)
    let packagePermData =
      allRole &&
      packagePermission &&
      packagePermission.packagePermission.filter(
        (item) => item.role_id == allRole.allRole[0].id
      )
    //console.log(packagePermData && packagePermData[0])
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.label === "Package") {
          // Update the properties as needed
          return {
            ...item,
            create:
              packagePermData && packagePermData[0]
                ? packagePermData[0].create !== 0
                  ? true
                  : false
                : false,
            read:
              packagePermData && packagePermData[0]
                ? packagePermData[0].view !== 0
                  ? true
                  : false
                : false,
            update:
              packagePermData && packagePermData[0]
                ? packagePermData[0].update !== 0
                  ? true
                  : false
                : false,
            delete:
              packagePermData && packagePermData[0]
                ? packagePermData[0].delete !== 0
                  ? true
                  : false
                : false,
          }
        }
        return item
      })
    })
  }, [packagePermission])

  useEffect(() => {
    //console.log(userPermission)
    let userPermData =
      allRole &&
      userPermission &&
      userPermission.userPermission.filter(
        (item) => item.role_id == allRole.allRole[0].id
      )
    //console.log(clientPermData)
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.label === "Users") {
          // Update the properties as needed
          return {
            ...item,
            create:
              userPermData && userPermData[0]
                ? userPermData[0].create === 0
                  ? false
                  : true
                : false,
            read:
              userPermData && userPermData[0]
                ? userPermData[0].view === 0
                  ? false
                  : true
                : false,
            update:
              userPermData && userPermData[0]
                ? userPermData[0].update === 0
                  ? false
                  : true
                : false,
            delete:
              userPermData && userPermData[0]
                ? userPermData[0].delete === 0
                  ? false
                  : true
                : false,
          }
        }
        return item
      })
    })
  }, [userPermission])

  const handleDataChange = (role) => {
    console.log(role)
    //get it from role
    let roleData =
      allRole && allRole.allRole.filter((item) => item.role === role)

    let roleId = roleData ? roleData[0] && roleData[0].id : 1
    let clientPermData =
      allRole &&
      clientPermission &&
      clientPermission.clientPermission.filter((item) => item.role_id == roleId)
    //console.log(allRole && allRole.allRole[0].id)
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.label === "Clients") {
          // Update the properties as needed
          return {
            ...item,
            create:
              clientPermData && clientPermData[0]
                ? clientPermData[0].create !== 0
                  ? true
                  : false
                : false,
            read:
              clientPermData && clientPermData[0]
                ? clientPermData[0].view !== 0
                  ? true
                  : false
                : false,
            update:
              clientPermData && clientPermData[0]
                ? clientPermData[0].update !== 0
                  ? true
                  : false
                : false,
            delete:
              clientPermData && clientPermData[0]
                ? clientPermData[0].delete !== 0
                  ? true
                  : false
                : false,
          }
        }
        return item
      })
    })

    let companyPermData =
      allRole &&
      companyPermission &&
      companyPermission.companyPermission.filter(
        (item) => item.role_id == roleId
      )
    //console.log(clientPermData)
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.label === "Company") {
          // Update the properties as needed
          return {
            ...item,
            create:
              companyPermData && companyPermData[0]
                ? companyPermData[0].create !== 0
                  ? true
                  : false
                : false,
            read:
              companyPermData && companyPermData[0]
                ? companyPermData[0].view !== 0
                  ? true
                  : false
                : false,
            update:
              companyPermData && companyPermData[0]
                ? companyPermData[0].update !== 0
                  ? true
                  : false
                : false,
            delete:
              companyPermData && companyPermData[0]
                ? companyPermData[0].delete !== 0
                  ? true
                  : false
                : false,
          }
        }
        return item
      })
    })

    let packagePermData =
      allRole &&
      packagePermission &&
      packagePermission.packagePermission.filter(
        (item) => item.role_id == roleId
      )
    //console.log(packagePermData && packagePermData[0])
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.label === "Package") {
          // Update the properties as needed
          return {
            ...item,
            create:
              packagePermData && packagePermData[0]
                ? packagePermData[0].create !== 0
                  ? true
                  : false
                : false,
            read:
              packagePermData && packagePermData[0]
                ? packagePermData[0].view !== 0
                  ? true
                  : false
                : false,
            update:
              packagePermData && packagePermData[0]
                ? packagePermData[0].update !== 0
                  ? true
                  : false
                : false,
            delete:
              packagePermData && packagePermData[0]
                ? packagePermData[0].delete !== 0
                  ? true
                  : false
                : false,
          }
        }
        return item
      })
    })

    let userPermData =
      allRole &&
      userPermission &&
      userPermission.userPermission.filter((item) => item.role_id == roleId)
    //console.log(clientPermData)
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.label === "Users") {
          // Update the properties as needed
          return {
            ...item,
            create:
              userPermData && userPermData[0]
                ? userPermData[0].create === 0
                  ? false
                  : true
                : false,
            read:
              userPermData && userPermData[0]
                ? userPermData[0].view === 0
                  ? false
                  : true
                : false,
            update:
              userPermData && userPermData[0]
                ? userPermData[0].update === 0
                  ? false
                  : true
                : false,
            delete:
              userPermData && userPermData[0]
                ? userPermData[0].delete === 0
                  ? false
                  : true
                : false,
          }
        }
        return item
      })
    })
  }

  const handleCheckboxChange = (index, columnName) => {
    setData((prevData) => {
      const newData = [...prevData]
      newData[index] = {
        ...newData[index],
        [columnName]: !newData[index][columnName],
      }
      return newData
    })
  }

  const handleInputChange = (data, field) => {
    let roleData =
      allRole && allRole.allRole.filter((item) => item.role === data)
    //console.log(data)
    setFormData({
      ...formData,
      [field]: data,
    })
    handleDataChange(data)
    setSelectedRole(roleData && roleData[0] && roleData[0].role)
  }

  const handleSubmit = () => {
    let selectedRoleInfo = allRole.allRole.filter(
      (item) => item.role === selectedRole
    )

    let permissions = {
      role: selectedRoleInfo[0],
      permissionData: data,
    }

    //console.log(permissions)
    processUpdatePermission(permissions)
  }

  return (
    <>
      <div className="w-98 p-6 bg-gray-100 rounded-lg shadow-md mt-4">
        <div className="w-full">
          <SelectField
            field={PERMISSION_ROLE}
            value={formData}
            options={roleOptions}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
          />
        </div>
        <div className="mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Label</th>
                <th className="py-2 px-4 border-b">Create</th>
                <th className="py-2 px-4 border-b">Read</th>
                <th className="py-2 px-4 border-b">Update</th>
                <th className="py-2 px-4 border-b">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b w-full">{item.label}</td>
                  <td className="py-2 px-4 border-b w-full">
                    <input
                      type="checkbox"
                      checked={item.create}
                      onChange={() => handleCheckboxChange(index, "create")}
                      className="form-checkbox h-5 w-5 text-blue-800"
                    />
                  </td>
                  <td className="py-2 px-4 border-b w-full">
                    <input
                      type="checkbox"
                      checked={item.read}
                      onChange={() => handleCheckboxChange(index, "read")}
                      className="form-checkbox h-5 w-5 text-blue-800"
                    />
                  </td>
                  <td className="py-2 px-4 border-b w-full">
                    <input
                      type="checkbox"
                      checked={item.update}
                      onChange={() => handleCheckboxChange(index, "update")}
                      className="form-checkbox h-5 w-5 text-blue-800"
                    />
                  </td>
                  <td className="py-2 px-4 border-b w-full">
                    <input
                      type="checkbox"
                      checked={item.delete}
                      onChange={() => handleCheckboxChange(index, "delete")}
                      className="form-checkbox h-5 w-5 text-blue-800"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 min-w-full flex items-center justify-center">
          <SubmitBtn text={"Submit"} submit={handleSubmit} />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddPermission

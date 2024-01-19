"use client"
import { useEffect, useContext, useState } from "react"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"
import {
  PACKAGE_TABLE_HEADER,
  DUMMY_PACKAGE_TABLE_DATA,
} from "@/app/constant/packageConstants"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"
import OtherSubHeader from "@/app/components/otherSubHeader"
import { subNavConst } from "@/app/constant/subNavConstants"
import SubNavbar from "@/app/components/subNavbar"
import PackageTableContainer from "@/app/components/packTableContainer"
import { AuthApiData } from "@/app/context/Auth/AuthContextApi.js"

const PackSetting = () => {
  const { singlePackagePermission, processGetSinglePackagePermission } =
    useContext(AccessControlData)
  const [packagePageLoading, setPackagePageLoading] = useState(true)
  const { processGetAllPackage, packageList } = useContext(OtherApiData)
  const { userProfile } = useContext(AuthApiData)
  useEffect(() => {
    processGetAllPackage()
    processGetSinglePackagePermission(userProfile.position)
  }, [])
  // console.log(packageList)

  useEffect(() => {
    if (singlePackagePermission) {
      console.log(singlePackagePermission)
      setPackagePageLoading(false)
    }
  }, [singlePackagePermission])

  return (
    <>
      <OtherSubHeader />
      {packagePageLoading ? (
        <>
          <h1>Loading..........</h1>
        </>
      ) : (
        singlePackagePermission.singlePackagePermission.create !== 0 && (
          <>
            <SubNavbar
              Label={subNavConst.package.label}
              URL={subNavConst.package.link}
            />
            <PackageTableContainer
              tableHeader={PACKAGE_TABLE_HEADER}
              tableInfo={packageList}
            />
          </>
        )
      )}
    </>
  )
}

export default PackSetting

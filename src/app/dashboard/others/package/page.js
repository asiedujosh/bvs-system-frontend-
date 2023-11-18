"use client"
import { useEffect, useContext } from "react"
import {
  PACKAGE_TABLE_HEADER,
  DUMMY_PACKAGE_TABLE_DATA,
} from "@/app/constant/packageConstants"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"
import OtherSubHeader from "@/app/components/otherSubHeader"
import { subNavConst } from "@/app/constant/subNavConstants"
import SubNavbar from "@/app/components/subNavbar"
import PackageTableContainer from "@/app/components/packTableContainer"

const PackSetting = () => {
  const { processGetAllPackage, packageList } = useContext(OtherApiData)
  useEffect(() => {
    processGetAllPackage()
  }, [])
  console.log(packageList)

  return (
    <>
      <OtherSubHeader />
      <SubNavbar
        Label={subNavConst.package.label}
        URL={subNavConst.package.link}
      />
      {/* {recordTable && ( */}
      <PackageTableContainer
        tableHeader={PACKAGE_TABLE_HEADER}
        tableInfo={packageList}
      />
      {/* )} */}
    </>
  )
}

export default PackSetting

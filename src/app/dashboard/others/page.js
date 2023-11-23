"use client"
import OtherSubHeader from "@/app/components/otherSubHeader"
import {
  COMPANY_TABLE_HEADER,
  DUMMY_COMPANY_TABLE_DATA,
} from "@/app/constant/companyConstants"
import { subNavConst } from "@/app/constant/subNavConstants"
import SubNavbar from "@/app/components/subNavbar"
import ComTableContainer from "@/app/components/comTableContainer"
import checkExpiryDate from "@/app/utils/checkExpiryDate"
import { DASHBOARDTABLE } from "@/app/constant/IndividualConstants"
import { useEffect, useContext } from "react"
import { OtherApiData } from "@/app/context/Others/OtherContextApi"

const CompanySetting = () => {
  const { processGetAllCompany, companyList } = useContext(OtherApiData)
  useEffect(() => {
    processGetAllCompany()
  }, [])

  //   let dueRecords =
  //     recordTable &&
  //     recordTable.data.filter((item) => checkExpiryDate(item.expiryDate))
  //checkExpiryDate(item.expiryDate)
  // console.log(dueRecords)

  return (
    <>
      <OtherSubHeader />
      <SubNavbar
        Label={subNavConst.company.label}
        URL={subNavConst.company.link}
      />
      {/* {recordTable && ( */}
      <ComTableContainer
        tableHeader={COMPANY_TABLE_HEADER}
        tableInfo={companyList}
      />
      {/* )} */}
    </>
  )
}

export default CompanySetting

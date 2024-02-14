"use client"
import { useContext, useEffect } from "react"
import DASHBOARD_DEFAULTS from "@/app/constant/dashboardConstants.js"
import Card from "@/app/components/cards"
import NotAllowedCard from "../components/notAllowedCard"
import { AuthApiData } from "@/app/context/Auth/AuthContextApi.js"
import { AccessControlData } from "@/app/context/AccessControl/AccessControlContextApi.js"

const Dashboard = () => {
  const {
    processGetSingleClientPermission,
    processGetSingleCompanyPermission,
    processGetSinglePackagePermission,
    processGetSingleUserPermission,
    processGetSingleProductPermission,
    processGetSingleServicePermission,
    singleClientPermission,
    companyPermission,
    packagePermission,
    userPermission,
    clientPermission,
    productPermission,
    servicePermission,
  } = useContext(AccessControlData)
  const { userProfile, processRetrieve } = useContext(AuthApiData)
  useEffect(() => {
    if (userProfile) {
      processGetSingleClientPermission(userProfile.position)
    } else {
      processRetrieve()
    }
    processGetSingleCompanyPermission(userProfile.position)
    processGetSinglePackagePermission(userProfile.position)
    processGetSingleUserPermission(userProfile.position)
    processGetSingleProductPermission(userProfile.position)
    processGetSingleServicePermission(userProfile.position)
  }, [
    userProfile,
    clientPermission,
    companyPermission,
    packagePermission,
    userPermission,
    productPermission,
    servicePermission,
  ])

  const displayInfo = () => {
    if (
      clientPermission !== null &&
      companyPermission !== null &&
      packagePermission !== null &&
      userPermission !== null &&
      productPermission !== null &&
      servicePermission !== null
    ) {
      // All permissions are not empty, render your component
      return (
        <div className="checkPoint">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="mt-4 md:mt-0 md:mb-4">
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between md:gap-8">
                {singleClientPermission &&
                singleClientPermission.singleClientPermission.create !== 0 ? (
                  <Card data={DASHBOARD_DEFAULTS.one} />
                ) : (
                  <NotAllowedCard />
                )}
                <Card data={DASHBOARD_DEFAULTS.two} />
              </div>
            </div>
            <div className="md:mt-4 mb-6 md:mb-0">
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between md:gap-8">
                <Card data={DASHBOARD_DEFAULTS.three} />
                <Card data={DASHBOARD_DEFAULTS.four} />
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      // At least one permission is empty, show loading message
      return <div>Loading...</div>
    }
  }

  // Call the displayInfo function directly in the return statement
  return displayInfo()
}

export default Dashboard

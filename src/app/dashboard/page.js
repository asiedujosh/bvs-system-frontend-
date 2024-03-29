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
    singleCompanyPermission,
    singlePackagePermission,
    singleUserPermission,
    singleProductPermission,
    singleServicePermission,
  } = useContext(AccessControlData)
  const { userProfile, processRetrieve } = useContext(AuthApiData)

  useEffect(() => {
    if (userProfile) {
      processGetSingleClientPermission(userProfile.position)
    } else {
      processRetrieve()
    }
  }, [userProfile])

  useEffect(() => {
    if (userProfile) {
      processGetSingleCompanyPermission(userProfile.position)
    }
  }, [singleClientPermission])

  useEffect(() => {
    if (userProfile) {
      processGetSinglePackagePermission(userProfile.position)
    }
  }, [singleCompanyPermission])

  useEffect(() => {
    if (userProfile) {
      processGetSingleUserPermission(userProfile.position)
    }
  }, [singlePackagePermission])

  useEffect(() => {
    if (userProfile) {
      processGetSingleProductPermission(userProfile.position)
    }
  }, [singleUserPermission])

  useEffect(() => {
    if (userProfile) {
      processGetSingleServicePermission(userProfile.position)
    }
  }, [singleProductPermission])

  const displayInfo = () => {
    const allPermissionsLoaded =
      singleClientPermission !== null &&
      singleCompanyPermission !== null &&
      singlePackagePermission !== null &&
      singleUserPermission !== null &&
      singleProductPermission !== null &&
      singleServicePermission !== null

    if (allPermissionsLoaded) {
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
      // Show loading message
      return (
        <main className="flex min-h-screen flex-col items-center justify-between md:py-24">
          <div className="flex items-center justify-center h-1/2 mt-32">
            <div className="animate-pulse bg-gray-200 p-6 rounded-md shadow-md">
              <div className="h-8 bg-gray-300 w-full mb-4">
                <h6>Bvs System is Loading...</h6>
              </div>
            </div>
          </div>
        </main>
      )
    }
  }

  // Call the displayInfo function directly in the return statement
  return displayInfo()
}

export default Dashboard

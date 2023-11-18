"use client"
import DASHBOARD_DEFAULTS from "../constant/dashboardConstants.js"
import Card from "../components/cards"

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between md:gap-8">
          <Card data={DASHBOARD_DEFAULTS.one} />
          <Card data={DASHBOARD_DEFAULTS.two} />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between md:gap-8">
          <Card data={DASHBOARD_DEFAULTS.three} />
          <Card data={DASHBOARD_DEFAULTS.four} />
        </div>
      </div>
    </div>
  )
}
export default Dashboard

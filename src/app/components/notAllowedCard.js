"use client"
import React from "react"

import DASHBOARD_DEFAULTS from "@/app/constant/dashboardConstants"

const NotAllowedCard = () => {
  return (
    <div className="max-w-lg bg-gray-200 shadow-lg rounded-lg overflow-hidden mb-6 md:mb-0">
      <div className="w-60 h-40">
        <div className="flex items-center justify-center text-center py-4">
          {/* SVG Image (Replace with your own SVG) */}
          {DASHBOARD_DEFAULTS.one.icon()}
        </div>
        <div className="py-4 px-6">
          <h2 className="text-xl font-semibold text-gray-300 text-center">
            {DASHBOARD_DEFAULTS.one.label}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default NotAllowedCard

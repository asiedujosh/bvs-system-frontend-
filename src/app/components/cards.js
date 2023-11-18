import React from "react"

import DASHBOARD_DEFAULTS from "../constant/dashboardConstants"
import Link from "next/link"

const Card = ({ data }) => {
  let content
  let link
  switch (data.label) {
    case DASHBOARD_DEFAULTS.one.label:
      content = DASHBOARD_DEFAULTS.one.icon()
      link = DASHBOARD_DEFAULTS.one.link
      break
    case DASHBOARD_DEFAULTS.two.label:
      content = DASHBOARD_DEFAULTS.two.icon()
      link = DASHBOARD_DEFAULTS.two.link
      break
    case DASHBOARD_DEFAULTS.three.label:
      content = DASHBOARD_DEFAULTS.three.icon()
      link = DASHBOARD_DEFAULTS.three.link
      break
    default:
      content = DASHBOARD_DEFAULTS.four.icon()
      link = DASHBOARD_DEFAULTS.four.link
  }

  return (
    <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden mb-6 md:mb-0">
      <Link href={link}>
        <div className="w-60 h-40 transition-transform transform hover:scale-105 hover:shadow-md hover:bg-white hover:ring-2 hover:ring-white">
          <div className="flex items-center justify-center text-center py-4">
            {/* SVG Image (Replace with your own SVG) */}
            {content}
          </div>
          <div className="py-4 px-6">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {data.label}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card

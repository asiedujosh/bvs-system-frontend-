"use client"
import Link from "next/link"
import { LinkToBeUsed } from "../constant/otherSubHeadConst"

const OtherSubHeader = () => {
  let subHeaderData = LinkToBeUsed()
  //Active Indicator
  let activeIndicator = subHeaderData.map(
    (item) =>
      item.active && (
        <Link
          href={item.link}
          className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 md:ml-4"
        >
          {item.label}
        </Link>
      )
  )

  let deactiveIndicator = subHeaderData.map(
    (item) =>
      !item.active && (
        <Link
          href={item.link}
          className="bg-white text-black px-4 py-2 rounded-md mr-2 hover:bg-gray-300"
        >
          {item.label}
        </Link>
      )
  )

  return (
    <div className="flex justify-between items-center bg-gray-200 p-4">
      {activeIndicator}
      <div className="flex items-center md:mr-4">{deactiveIndicator}</div>
    </div>
  )
}

export default OtherSubHeader

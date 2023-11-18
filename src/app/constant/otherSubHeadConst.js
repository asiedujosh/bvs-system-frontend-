"use client"
import { usePathname } from "next/navigation"

const SUBLABELS = ["Company", "Package"]
const PATH = ["company", "package"]

export const LinkToBeUsed = () => {
  let definePath
  let currentPath = usePathname()
  PATH.map((item) => {
    if (currentPath.indexOf(item) !== -1) definePath = item
  })

  switch (definePath) {
    case PATH[0]:
      return Indicator(currentPath, PATH[0])
      break
    default:
      return Indicator(currentPath, PATH[1])
  }
}

const Indicator = (currentPath, path) => {
  return [
    {
      label: SUBLABELS[0],
      link: `/dashboard/others`,
      active: currentPath === `/dashboard/others` ? true : false,
    },
    {
      label: SUBLABELS[1],
      link: `/dashboard/others/${path}`,
      active: currentPath === `/dashboard/others/${path}` ? true : false,
    },
  ]
}

"use client"
import { usePathname } from "next/navigation"

const SUBLABELS = ["Due", "All", "Remind"]
const PATH = ["individual", "company"]

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
    case PATH[1]:
      return Indicator(currentPath, PATH[1])
      break
    default:
      return Indicator(currentPath, PATH[2])
  }
}

const Indicator = (currentPath, path) => {
  return [
    {
      label: SUBLABELS[0],
      link: `/dashboard/${path}`,
      active: currentPath === `/dashboard/${path}` ? true : false,
    },
    {
      label: SUBLABELS[1],
      link: `/dashboard/${path}/all`,
      active: currentPath === `/dashboard/${path}/all` ? true : false,
    },
    {
      label: SUBLABELS[2],
      link: `/dashboard/${path}/remind`,
      active: currentPath === `/dashboard/${path}/remind` ? true : false,
    },
  ]
}

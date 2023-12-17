"use client"
import { usePathname } from "next/navigation"

const SUBLABELS = ["Settings", "Access Control"]
const PATH = ["settings", "accessControl"]

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
      link: `settings`,
      active: currentPath === `/settings` ? true : false,
    },
    {
      label: SUBLABELS[1],
      link: `/settings/accessControl`,
      active: currentPath === `/settings/accessControl` ? true : false,
    },
  ]
}

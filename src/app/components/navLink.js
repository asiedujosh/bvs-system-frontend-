"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavbarLink = ({ label, url, logout }) => {
  const handleLogout = () => {
    logout()
  }

  const linkToCheck = url
  const currentPath = `/${usePathname().split("/")[1]}`
  const isLinkActive = currentPath === linkToCheck

  const NewNavLink = (
    <Link
      href={url}
      className={`${
        isLinkActive && "underline"
      } text-black block mb-2 hover:underline`}
    >
      {label}
    </Link>
  )

  const LogoutLink = (
    <span
      className={`text-black block mb-2 hover:underline cursor-pointer`}
      onClick={handleLogout}
    >
      {label}
    </span>
  )

  return url ? NewNavLink : LogoutLink
}

export default NavbarLink

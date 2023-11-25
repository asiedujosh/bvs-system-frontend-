"use client"
// components/Navbar.js

import React, { useState, useContext, useEffect } from "react"
import { AuthApiData } from "@/app/context/Auth/AuthContextApi.js"
import NavbarLink from "./navLink"
import NAVBAR_DEFAULTS from "@/app/constant/navbarConstants"

const Navbar = () => {
  const { userProfile, processRetrieve, isAuthenticated, processLogout } =
    useContext(AuthApiData)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    !isAuthenticated && processRetrieve()
  }, [])

  return (
    <nav className="bg-white p-4">
      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold ml-6">
            {`${NAVBAR_DEFAULTS.intro}  ${
              userProfile ? userProfile.name.split(" ")[0] : ""
            }`}
            ,
          </h1>

          {/* Toggle button for mobile */}
          <button
            className="block sm:hidden text-black p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dropdown Card (on mobile) */}
          {isOpen && (
            <div className="z-10 block sm:hidden bg-white w-1/4 absolute top-20 right-0 border border-gray-300 rounded-md shadow-lg p-4 transition-transform transform -translate-x-1/2">
              {NAVBAR_DEFAULTS.links.map((link) => (
                <NavbarLink
                  label={link.label}
                  url={link.url}
                  logout={
                    link.label === NAVBAR_DEFAULTS.links[3].label &&
                    processLogout
                  }
                />
              ))}
            </div>
          )}

          {/* Navigation Links (on larger screens) */}
          <div className="hidden sm:hidden md:flex space-x-4 mr-6">
            {NAVBAR_DEFAULTS.links.map((link) => (
              <NavbarLink
                label={link.label}
                url={link.url}
                logout={
                  link.label === NAVBAR_DEFAULTS.links[3].label && processLogout
                }
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

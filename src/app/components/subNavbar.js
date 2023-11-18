"use client"
import Link from "next/link"
// components/Navbar.js

import React, { useState } from "react"

const SubNavbar = ({ Label, URL }) => {
  return (
    <div className="bg-red-400">
      <div className="flex px-10">
        <span className="text-lg text-white ml-auto mr-2">
          <Link href={URL}>{Label}</Link>
        </span>
      </div>
    </div>
  )
}

export default SubNavbar

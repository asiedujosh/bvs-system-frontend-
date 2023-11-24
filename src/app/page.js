"use client"
import { useRouter } from "next/navigation"
import { useEffect, useContext } from "react"

export default function Home() {
  useEffect(() => {
    const router = useRouter()

    router.push("/login")
  }, [])
}

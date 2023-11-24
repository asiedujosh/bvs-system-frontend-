"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const router = useRouter()

    router.push("/login")
  }, [])

  return <div className="text-white text-lg">Welcome to Bvs</div>
}

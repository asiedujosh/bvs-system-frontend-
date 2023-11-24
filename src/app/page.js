"use client"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const router = useRouter()
    router.push("/sample")
  }, [])

  return <div className="text-white text-lg">Welcome to Bvs</div>
}

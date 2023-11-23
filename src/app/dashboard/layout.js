import Navbar from "@/app/components/navbar"
export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

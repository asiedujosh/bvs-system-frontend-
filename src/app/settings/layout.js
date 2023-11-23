import Navbar from "../components/navbar"
export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

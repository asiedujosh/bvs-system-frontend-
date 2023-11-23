import { Inter } from "next/font/google"
import "./globals.css"
import AuthApiDataProvider from "./context/Auth/AuthContextApi"
import StaffApiDataProvider from "./context/Staff/StaffContextApi"
import IndividualApiDataProvider from "./context/Individual/IndividualContextApi"
import OtherApiDataProvider from "./context/Others/OtherContextApi"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BVS Security System",
  description: "Brichhub Security Management",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthApiDataProvider>
          <StaffApiDataProvider>
            <OtherApiDataProvider>
              <IndividualApiDataProvider>{children}</IndividualApiDataProvider>
            </OtherApiDataProvider>
          </StaffApiDataProvider>
        </AuthApiDataProvider>
      </body>
    </html>
  )
}

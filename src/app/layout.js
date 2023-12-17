import { Inter } from "next/font/google"
import "./globals.css"
import AuthApiDataProvider from "@/app/context/Auth/AuthContextApi"
import StaffApiDataProvider from "@/app/context/Staff/StaffContextApi"
import IndividualApiDataProvider from "@/app/context/Individual/IndividualContextApi"
import OtherApiDataProvider from "@/app/context/Others/OtherContextApi"
import AccessControlDataProvider from "@/app/context/AccessControl/AccessControlContextApi"

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
          <AccessControlDataProvider>
            <StaffApiDataProvider>
              <OtherApiDataProvider>
                <IndividualApiDataProvider>
                  {children}
                </IndividualApiDataProvider>
              </OtherApiDataProvider>
            </StaffApiDataProvider>
          </AccessControlDataProvider>
        </AuthApiDataProvider>
      </body>
    </html>
  )
}

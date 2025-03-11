import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout


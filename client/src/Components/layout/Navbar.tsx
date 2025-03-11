"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Menu, X, LogOut, Search } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be managed by your auth context

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // This is just for the mockup, you would use your actual auth logic
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <nav className="bg-white shadow-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <MapPin className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-primary-800">GEOLISTIFY</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search locations..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <Link
              to="/explore"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              Explore
            </Link>
            <Link
              to="/categories"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              Categories
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600"
                >
                  Dashboard
                </Link>
                <button
                  onClick={toggleLogin}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md text-sm font-medium text-primary-600 border border-primary-600 hover:bg-primary-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search locations..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <Link
            to="/explore"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
          >
            Explore
          </Link>
          <Link
            to="/categories"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
          >
            Categories
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
              >
                Dashboard
              </Link>
              <button
                onClick={toggleLogin}
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link
                to="/login"
                className="text-center px-4 py-2 rounded-md text-sm font-medium text-primary-600 border border-primary-600 hover:bg-primary-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-center px-4 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar


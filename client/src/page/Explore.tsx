"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Search, Star, Filter, MapIcon, List, X, ChevronDown } from "lucide-react"
import MainLayout from "../Components/layout/MainLayout"

// Mock data for listings
const listings = [
  {
    id: 1,
    name: "Violet Café",
    category: "Restaurant",
    rating: 4.8,
    reviews: 124,
    address: "123 Maple Street, New York",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.712776,
    lng: -74.005974,
  },
  {
    id: 2,
    name: "Purple Palace Hotel",
    category: "Hotel",
    rating: 4.6,
    reviews: 89,
    address: "456 Oak Avenue, New York",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.715076,
    lng: -74.002574,
  },
  {
    id: 3,
    name: "Lavender Park",
    category: "Attraction",
    rating: 4.9,
    reviews: 210,
    address: "789 Pine Boulevard, New York",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.718076,
    lng: -74.008974,
  },
  {
    id: 4,
    name: "Amethyst Mall",
    category: "Shopping",
    rating: 4.5,
    reviews: 76,
    address: "101 Cedar Lane, New York",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.710076,
    lng: -74.001574,
  },
  {
    id: 5,
    name: "Indigo Spa & Wellness",
    category: "Health",
    rating: 4.7,
    reviews: 92,
    address: "202 Birch Road, New York",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.713076,
    lng: -74.009974,
  },
  {
    id: 6,
    name: "Plum Bistro",
    category: "Restaurant",
    rating: 4.4,
    reviews: 68,
    address: "303 Elm Street, New York",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.716076,
    lng: -74.003574,
  },
]

// Mock data for categories
const categories = [
  { id: 1, name: "All", count: 120 },
  { id: 2, name: "Restaurants", count: 45 },
  { id: 3, name: "Hotels", count: 28 },
  { id: 4, name: "Attractions", count: 32 },
  { id: 5, name: "Shopping", count: 15 },
]

const Explore = () => {
  const [viewMode, setViewMode] = useState<"map" | "list">("map")
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        {/* Search and Filter Bar */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-grow max-w-xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for places..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="hidden md:flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedCategory === category.id
                          ? "bg-primary-100 text-primary-800"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                <div className="md:hidden">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium"
                  >
                    Categories
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  Filters
                </button>

                <div className="flex border rounded-md overflow-hidden">
                  <button
                    onClick={() => setViewMode("map")}
                    className={`p-2 ${
                      viewMode === "map" ? "bg-primary-100 text-primary-700" : "bg-white text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <MapIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${
                      viewMode === "list"
                        ? "bg-primary-100 text-primary-700"
                        : "bg-white text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Categories */}
            {showFilters && (
              <div className="md:hidden mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedCategory === category.id
                        ? "bg-primary-100 text-primary-800"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {viewMode === "map" ? (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Map View */}
              <div className="lg:w-2/3 h-[500px] bg-white rounded-xl shadow-custom overflow-hidden border border-gray-200">
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Google Maps Integration</h3>
                    <p className="text-gray-600">
                      This is where the Google Maps component would be displayed, showing all the listings as pins.
                    </p>
                  </div>
                </div>
              </div>

              {/* Listings Sidebar */}
              <div className="lg:w-1/3 space-y-4">
                <div className="bg-white rounded-xl shadow-custom p-4 border border-gray-200">
                  <h2 className="text-lg font-bold mb-4">Nearby Listings</h2>
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {listings.slice(0, 4).map((listing) => (
                      <Link
                        key={listing.id}
                        to={`/listing/${listing.id}`}
                        className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.name}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                              {listing.category}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-900">{listing.name}</h3>
                          <div className="flex items-center text-sm">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="font-medium text-gray-900 ml-1">{listing.rating}</span>
                            <span className="text-gray-500 ml-1">({listing.reviews})</span>
                          </div>
                          <div className="flex items-start text-gray-500 text-xs mt-1">
                            <MapPin className="h-3 w-3 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="ml-1">{listing.address}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* List View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <Link
                  key={listing.id}
                  to={`/listing/${listing.id}`}
                  className="bg-white rounded-xl shadow-custom overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 hover:border-primary-200"
                >
                  <div className="relative">
                    <img
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium text-primary-600 shadow-sm">
                      {listing.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{listing.name}</h3>
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900 ml-1">{listing.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({listing.reviews} reviews)</span>
                    </div>
                    <div className="flex items-start text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="ml-1">{listing.address}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default Explore


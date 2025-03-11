"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Search, Star, ChevronRight, Filter, MapIcon, List } from "lucide-react"
import MainLayout from "../Components/layout/MainLayout"
import terreBg from "../assets/terre.png"

// Mock data for featured listings
const featuredListings = [
  {
    id: 1,
    name: "Violet Café",
    category: "Restaurant", 
    rating: 4.8,
    reviews: 124,
    address: "123 Maple Street, New York",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Purple Palace Hotel",
    category: "Hotel",
    rating: 4.6,
    reviews: 89,
    address: "456 Oak Avenue, New York", 
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Lavender Park",
    category: "Attraction",
    rating: 4.9,
    reviews: 210,
    address: "789 Pine Boulevard, New York",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Amethyst Mall",
    category: "Shopping",
    rating: 4.5,
    reviews: 76,
    address: "101 Cedar Lane, New York",
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Mock data for categories
const categories = [
  { id: 1, name: "Restaurants", count: 120, icon: "🍽️" },
  { id: 2, name: "Hotels", count: 85, icon: "🏨" },
  { id: 3, name: "Attractions", count: 64, icon: "🎡" },
  { id: 4, name: "Shopping", count: 92, icon: "🛍️" },
  { id: 5, name: "Services", count: 78, icon: "🔧" },
  { id: 6, name: "Health", count: 45, icon: "🏥" },
]

const Home = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <MainLayout>
      {/* Hero Section */}
      <section 
        className="bg-transparent text-white relative"
        style={{
          backgroundImage: `url(${terreBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Discover Amazing Places Around You</h1>
            <p className="text-lg md:text-xl mb-8 text-pink-100 animate-slide-up">
              Find and explore the best locations with our interactive map directory
            </p>

            <div className="bg-white rounded-full shadow-lg p-1 flex items-center max-w-2xl mx-auto transform hover:scale-105 transition-transform">
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for places..."
                    className="w-full pl-10 pr-4 py-3 rounded-full focus:outline-none text-gray-800 focus:ring-2 focus:ring-purple-300"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-purple-400" />
                </div>
              </div>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Search
              </button>
            </div>

            <div className="mt-4 text-purple-200 text-sm">Popular: Restaurants, Hotels, Parks, Shopping Centers</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of categories to find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="bg-white rounded-xl shadow-custom p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1 border border-purple-100 hover:border-purple-300"
              >
                <div className="text-4xl mb-3 animate-bounce">{category.icon}</div>
                <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-purple-500">{category.count} places</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/categories"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
            >
              View all categories
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Listings</h2>
              <p className="text-lg text-gray-600">Discover our handpicked selection of amazing places</p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md ${viewMode === "grid" ? "bg-purple-100 text-purple-700" : "text-gray-500 hover:text-purple-600"}`}
              >
                <MapIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md ${viewMode === "list" ? "bg-purple-100 text-purple-700" : "text-gray-500 hover:text-purple-600"}`}
              >
                <List className="h-5 w-5" />
              </button>
              <button className="flex items-center text-gray-700 hover:text-purple-600 ml-4">
                <Filter className="h-5 w-5 mr-1" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div
            className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"} gap-6`}
          >
            {featuredListings.map((listing) => (
              <Link
                key={listing.id}
                to={`/listing/${listing.id}`}
                className={`bg-white rounded-xl shadow-custom overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 border border-purple-100 hover:border-purple-300 ${
                  viewMode === "list" ? "flex" : "block"
                }`}
              >
                <div className={viewMode === "list" ? "w-1/3 flex-shrink-0" : ""}>
                  <img
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.name}
                    className={`w-full h-48 object-cover ${viewMode === "list" ? "h-full" : ""} hover:opacity-90 transition-opacity`}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-1">
                    <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                      {listing.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{listing.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">{listing.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({listing.reviews} reviews)</span>
                  </div>
                  <div className="flex items-start text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="ml-1">{listing.address}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/explore"
              className="inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Explore All Listings
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Ready to Add Your Own Listing?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our community and share your favorite places with the world. It only takes a few minutes to get
            started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Sign Up Now
            </Link>
            <Link
              to="/learn-more"
              className="border border-white text-white hover:bg-purple-500 px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Home

import { MapPin, Mail, Phone, GitlabIcon as GitHub } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-primary-300" />
              <span className="ml-2 text-xl font-bold">GEOLISTIFY</span>
            </div>
            <p className="text-primary-200 text-sm">
              Discover and share amazing locations around the world with our interactive map directory.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white">
                <GitHub className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-200 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white">
                  Explore Map
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white">
                  Add Listing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-200 hover:text-white">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white">
                  Hotels
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white">
                  Attractions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white">
                  Shopping
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-primary-200">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@geolistify.com</span>
              </li>
              <li className="flex items-center text-primary-200">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-primary-200">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Map Street, Location City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700 text-center text-primary-300 text-sm">
          <p>&copy; {new Date().getFullYear()} GEOLISTIFY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


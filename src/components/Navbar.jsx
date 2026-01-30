import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-indigo-400">
              My Tasks
            </h1>
          </div>

          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="hover:bg-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="hover:bg-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="hover:bg-gray-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
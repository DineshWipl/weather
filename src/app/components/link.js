import { useState } from "react";
import Link from "next/link";

export default function MegaMenu() {
  // State to track which category is being hovered over
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // State to track whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // A helper function to handle the mouse leaving the mega menu area entirely
  const handleMouseLeaveMenu = () => {
    // Reset the hoveredCategory state when the mouse leaves the whole menu
    setHoveredCategory(null);
  };

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  

  return (
    <nav className={isActive ? 'header-color' : ''} onMouseLeave={handleMouseLeaveMenu}>
      <div className="w-full mx-auto px-20">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Link href="/" className="text-xl ">
                Brand
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hiddenmx-auto sm:flex sm:items-center sm:ml-6">
              <div className="relative group">
                <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" hover:text-gray-900 py-5 px-4">
                  Categoriess
                </button>

                {/* Mega Menu Panel */}
                <div className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white mega-menu-dropdown">
                  <div className="grid grid-cols-[200px_1fr] gap-20 p-6">
                    {/* Column 1 - Category Titles */}
                    <div className=""> 
                      <h3 className="text-lg text-gray-900 mb-3">
                        Solutions by Industry
                      </h3>
                      <ul className="space-y-2">
                        <li
                          onMouseEnter={() => setHoveredCategory("banking-ai")}
                        >
                          <Link href="#" className="text-gray-600 hover:text-gray-900">
                            Banking AI
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() => setHoveredCategory("comercial-ai")}
                        >
                          <Link href="#" className="text-gray-600 hover:text-gray-900">
                            Comercial AIiiii
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-gray-600 hover:text-gray-900">
                            Financial AI
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 - Submenu (Items) */}
                    <div className=""
                      onMouseEnter={() => setHoveredCategory(hoveredCategory)} // Keep showing the current items
                      onMouseLeave={() => setHoveredCategory(null)} // Only hide when leaving the whole section
                    >
                      <div className="flex">
                        <div className="w-1/2">
                          
                          {hoveredCategory === "banking-ai" && (
                              <div className="flex">
                                <div className=" w-4/5 px-5">
                                <h3 className="text-lg text-gray-900 mb-3">Description</h3>
                                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    <img src="https://picsum.photos/400/300" alt="Placeholder image" className="rounded-lg shadow-md" />
                                  </Link>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi autem eos suscipit reiciendis placeat, enim perferendis vitae...</p>
                                </div>
                                <div>
                                  <h3 className="text-lg text-gray-900 mb-3">Products</h3>
                                test123</div>
                              </div>
                            )}

 {/* Show "Item 2" when "Comercial AIiiii" is hovered */}
 {hoveredCategory === "comercial-ai" && (
                              <div className="flex">
                                <div className=" w-4/5 px-5">
                                <h3 className="text-lg text-gray-900 mb-3">Description</h3>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                  Item 2
                                </Link>
                                </div>
                                <div>
                                  <h3 className="text-lg text-gray-900 mb-3">Products</h3>
                                q34test123</div>
                              </div>
                            )}


 {/* Default content */}
 {hoveredCategory === null && (
                              <div className="flex">
                                <div className=" w-4/5 px-5">
                                <h3 className="text-lg text-gray-900 mb-3">Description</h3>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                  Select a category
                                </Link>
                                </div>
                                <div>
                                  <h3 className="text-lg text-gray-900 mb-3">Products</h3>
                                  testddd
                                  </div>
                              </div>
                            )}


                         
                        </div>
                        
                      </div>

                    </div>

                    {/* Additional Columns... */}
                  </div>
                </div>
              </div>

              {/* Other menu items */}
              <Link href="/about" className=" hover:text-gray-900 py-2 px-4">
                About
              </Link>
              <Link href="/contact" className=" hover:text-gray-900 py-2 px-4">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="sm:hidden flex items-center">
            {/* Button to toggle mobile menu open/closed */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}  // Toggle the mobile menu when clicked
              className=" hover:text-gray-900 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Conditionally render the 'X' (close) icon if menu is open, otherwise the hamburger (open) icon */}
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden mt-2 space-y-1">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button className=" hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Categories for mobile
              </button>
              {/* Mobile Menu Dropdown */}
              <div className="grid grid-cols-1 gap-4 p-4">
                <div>
                  <h3 className="text-lg   mb-3">
                    Category 1
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-gray-900">
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-gray-900">
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-gray-900">
                        Item 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/about" className=" hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/contact" className=" hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

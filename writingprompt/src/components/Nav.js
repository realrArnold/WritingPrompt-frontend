"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
const { ApiClient } = require("../../apiclient/client");

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const apiClient = new ApiClient(); // Initialize your ApiClient

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path) => {
    setIsOpen(false); // Close the menu
    router.push(path);
  };

  const handleLogout = async () => {
    try {
      // Call the logout function from ApiClient
      await apiClient.logout();
      
      // Clear local storage or any other session data if necessary
      localStorage.removeItem("authToken");
      localStorage.removeItem("userId");

      // Optionally, you can redirect to login page after logout
      router.push("/login"); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-white p-4 w-full top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <h1 className="text-2xl font-bold text-blue-500 ml-auto">Writing Prompt App</h1>
        
        {isOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-100 z-40 flex flex-col items-start transition-all duration-300 p-4 w-64">
            <button onClick={toggleMenu} className="self-end mb-4"><X size={30} /></button>
            <ul className="w-full">
              <li><button onClick={() => handleNavigation("/promptspage")} className="block py-2 px-4 hover:text-blue-500">Home</button></li>
              <li><button onClick={() => handleNavigation("/userDashboard")} className="block py-2 px-4 hover:text-blue-500">Dashboard</button></li>
              <li><button onClick={() => handleNavigation("/promptspage")} className="block py-2 px-4 hover:text-blue-500">Prompts</button></li>
              <li><button onClick={() => handleNavigation("/noticeboard")} className="block py-2 px-4 hover:text-blue-500">Notice Board</button></li>
              <li><button onClick={() => handleNavigation("/login")} className="block py-2 px-4 hover:text-blue-500">Login</button></li>
              <li><button onClick={() => handleNavigation("/signup")} className="block py-2 px-4 hover:text-blue-500">Sign Up</button></li>
              {/* If the user is logged in, show the Logout button */}
              <li>
                <button onClick={handleLogout} className="block py-2 px-4 hover:text-blue-500">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;


// export default navbar
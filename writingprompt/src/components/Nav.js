"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path) => {
    setIsOpen(false); // Close the menu
    router.push(path);
  };

  return (
    <nav className="bg-white shadow-md p-4 w-full top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <button onClick={toggleMenu}>
        
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <h1 className="text-2xl font-bold text-blue-500 ml-auto">Writing Prompt App</h1>
        
        {isOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-100 z-40 flex flex-col items-start shadow-md transition-all duration-300 p-4 w-64">
            <button onClick={toggleMenu} className="self-end mb-4"><X size={30} /></button>
            <ul className="w-full">
              <li><button onClick={() => handleNavigation("/")} className="block py-2 px-4 hover:text-blue-500">Home</button></li>
              <li><button onClick={() => handleNavigation("/dashboard")} className="block py-2 px-4 hover:text-blue-500">Dashboard</button></li>
              <li><button onClick={() => handleNavigation("/promptspage")} className="block py-2 px-4 hover:text-blue-500">Prompts</button></li>
              <li><button onClick={() => handleNavigation("/noticeboard")} className="block py-2 px-4 hover:text-blue-500">Notice Board</button></li>
              <li><button onClick={() => handleNavigation("/login")} className="block py-2 px-4 bg-blue-500 text-white rounded-lg">Login</button></li>
              <li><button onClick={() => handleNavigation("/signup")} className="block py-2 px-4 bg-green-500 text-white rounded-lg">Sign Up</button></li>
              <li><button onClick={() => handleNavigation("/logout")} className="block py-2 px-4 bg-red-500 text-white rounded-lg">Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

// export default navbar
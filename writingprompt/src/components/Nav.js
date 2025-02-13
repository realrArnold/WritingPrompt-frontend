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
    <nav className="bg-white shadow-md p-2">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <h1 className="text-2xl font-bold text-blue-500 ml-auto">Writing Prompt App</h1>
        
        {isOpen && (
          <ul className="absolute bg-white w-64 left-0 top-16 flex flex-col items-start shadow-md transition-all duration-300 p-4">
            <li><button onClick={() => handleNavigation("/")} className="block py-2 px-4 hover:text-blue-500">Home</button></li>
            <li><button onClick={() => handleNavigation("/dashboard")} className="block py-2 px-4 hover:text-blue-500">Dashboard</button></li>
            <li><button onClick={() => handleNavigation("/promptspage")} className="block py-2 px-4 hover:text-blue-500">Prompts</button></li>
            <li><button onClick={() => handleNavigation("/noticeboard")} className="block py-2 px-4 hover:text-blue-500">Notice Board</button></li>
            <li><button onClick={() => handleNavigation("/login")} className="block py-2 px-4 bg-blue-500 text-white rounded-lg">Login</button></li>
            <li><button onClick={() => handleNavigation("/signup")} className="block py-2 px-4 bg-green-500 text-white rounded-lg">Sign Up</button></li>
            <li><button onClick={() => handleNavigation("/logout")} className="block py-2 px-4 bg-red-500 text-white rounded-lg">Logout</button></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;



// export default navbar
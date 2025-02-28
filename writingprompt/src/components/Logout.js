import React, { useState } from "react";
import { ApiClient } from "./client"; // Import your ApiClient class

const LogoutButton = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const apiClient = new ApiClient();  // Create an instance of ApiClient

  const handleLogout = async () => {
    setIsLoggingOut(true);
    const success = await apiClient.logout(); // Call the logout method
    if (success) {
      // Redirect to login page after logout
      window.location.href = "/login";  
    } else {
      alert("Logout failed. Please try again.");
    }
    setIsLoggingOut(false);
  };

  return (
    <button onClick={handleLogout} disabled={isLoggingOut}>
      {isLoggingOut ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;

import HeroPrompt from "@/components/HeroPrompt";
import WritingArea from "@/components/WritingArea.js";
import React from "react";


export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [isSignup, setIsSignup] = useState(true); // Default to signup page



  // remove
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    router.push("/"); // Redirect to dashboard after login
  };

  const signup = async (userData) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      setIsSignup(false); // Switch to login form
      router.push("/"); // Redirect to login page
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/");
  };

  const client = new ApiClient(() => token, logout);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  if (token) {
    return (
      <div>
        <Hero115 client={client} />
        <WritingArea />
      </div>
    );
  }


export default Home;

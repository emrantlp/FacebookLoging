import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TestPages() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (rememberMe) {
      localStorage.setItem("emailOrPhone", emailOrPhone);
    }

    try {
      const response = await fetch("https://example.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      if (!response.ok) throw new Error("Login failed!");

      const result = await response.json();
      toast.success("Login Successful!");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center h-[500px] bg-gray-300">

    <div className="w-full mb-2 max-w-md text-4xl font-bold font-serif text-center rounded-md"><span className="text-blue-500">F</span><span className="text-red-500">a</span><span className="text-yellow-500">c</span><span className="text-blue-500">e</span><span className="text-emerald-500">b</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">k</span>
        
        </div>

        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-md bg-white p-8 rounded-md shadow-md">
          <h2 className="text-center text-2xl text-blue-500 font-medium font-serif">
            Login To Facebook
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <label className="block text-sm font-medium font-serif text-gray-700 mb-1">
                Email Or Phone:
              </label>
              <div className="p-1 w-full border border-gray-400 rounded-md">
                <input
                  className="w-full block p-2 text-base outline-none"
                  type="text"
                  placeholder="Enter Your Email Address or Phone Number"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  pattern="^(\+?[0-9]{1,3}[- ]?)?[0-9]{7,}$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email or phone number"
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label className="block text-sm font-medium font-serif text-gray-700 mb-1">
                Password:
              </label>
              <div className="flex items-center p-1 justify-between w-full border border-gray-400 rounded-md">
                <input
                  className="w-full block text-base outline-none p-2"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="w-auto block bg-slate-500 p-2 rounded-full outline-none"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-gray-100 stroke-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-gray-100 stroke-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="mt-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="form-checkbox text-blue-600"
                />
                <span>Remember Me</span>
              </label>
            </div>
            <div className="mt-3">
              <button
                className="w-full p-1 text-white font-medium text-xl font-serif bg-blue-600 rounded-md hover:bg-blue-700"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
            <hr className="border-b-0 border-gray-800 mt-3" />
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <a
                  className="text-blue-600 font-medium text-base"
                  href="/forgot-password"
                >
                  Forgotten account?
                </a>
                <a
                  className="text-blue-600 font-medium text-base"
                  href="#"
                >
                  Sign up for Facebook
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default TestPages;
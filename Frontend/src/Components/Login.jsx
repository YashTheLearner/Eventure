// 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import photo from "../assets/photo.jpg";
import { toast, ToastContainer } from "react-toastify";
import axios from "../Axios/axios.jsx";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Log formData to check if it's sending the correct values
  
    try {
      const result = await axios.post("/user/login", formData, {
        withCredentials: true // This allows cookies to be sent/received
      });
      console.log(result);
  
      // Show success toast
      toast.success("Successfully logged in!");
  
      // Navigate to Home component
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="bg-[rgba(17,24,39,1)] min-h-screen flex items-center justify-center">
      <ToastContainer /> {/* Add ToastContainer to display toasts */}
      <div className="bg-gray-100 flex rounded-2xl shadow-xl max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl" style= {{ color: "rgba(17,24,39,1)" }}>Login</h2>
          <p className="text-xs mt-4" style={{ color: "rgba(17,24,39,1)" }}>
            If you are already a member, easily log in
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              id="userEmail"
              onChange={handleChange}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                id="userPassword"
                onChange={handleChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
                onClick={() => setShowPassword(!showPassword)}
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button className="bg-[rgba(17,24,39,1)] rounded-xl font-bold text-white py-2 hover:scale-105 duration-300 hover:bg-gray-300 hover:text-[rgba(17,24,39,1)]">
              Login
            </button>
          </form>

          

         

          <div className="mt-5 text-xs border-b border-[rgba(17,24,39,1)] py-4 text-[rgba(17,24,39,1)]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[rgba(17,24,39,1)]">
            <p>Dont have an account?</p>
            <button 
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" 
              onClick={() => navigate("/signup")} // Wrap navigate in an arrow function
            >
              Register
            </button>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={photo} alt="Login Visual" />
        </div>
      </div>
    </section>
  );
};

export default Login;

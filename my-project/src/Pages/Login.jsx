import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!email.trim()) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      toast.error("Invalid credentials");
      return;
    }

    const token = btoa(
      JSON.stringify({
        email: user.email,
        exp: Date.now() + 3 * 24 * 60 * 60 * 1000, // expires in 3 days
      })
    );

    localStorage.setItem("token", token);
    localStorage.setItem("currentUser", JSON.stringify(user));

    toast.success("Login successful!", {
      onClose: () => navigate("/"),
      autoClose: 1500,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-2 md:px-4 py-4 bg-green-50">
      <ToastContainer />
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 max-sm:p-4">
        <div className="flex justify-center mb-6">
          {/* <img src={Logo} alt="logo" className="w-[120px]" /> */}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-1 sm:mb-2 text-green-700 max-sm:text-[18px] ">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-6 text-sm max-md:text-[12px]">Log in to your account</p>

        <form
          onSubmit={handleLogin}
          className="bg-white rounded  w-full max-w-md"
        >
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1 text-green-700 max-md:text-[13px]">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 rounded-lg border max-md:text-[13px] ${errors.email ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-green-400`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">{errors.email}</p>
            )}
          </div>

      <div className="mb-3">
      <label className="block text-sm font-medium mb-1 text-green-700 max-md:text-[13px]">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"} // 👈 Toggle type
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full p-2 rounded-lg border max-md:text-[13px] ${
            errors.password ? "border-red-500" : "border-gray-200"
          } focus:outline-none focus:ring-2 focus:ring-green-400`}
        />
        {/* 👁 Show/Hide Icon Button */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2 text-gray-600"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm mb-2">{errors.password}</p>
      )}
    </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 md:py-3 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>


          <p className="mt-4 text-center text-sm max-md:text-[13px]">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

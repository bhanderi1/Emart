import React, { useState, useEffect } from "react";
// import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "../Product_Data/Auth/AuthAction"; // Your Redux action

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorInput, setErrorInput] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (!email.trim()) {
      errors.email = "Please enter an email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password.trim()) {
      errors.password = "Please enter a password";
    } else if (password.length < 8 || password.length > 16) {
      errors.password = "Password length should be between 8 to 16 characters";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrorInput(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(loginUser({ email, password }));
    }
  };

  useEffect(() => {
    if (currentUser) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }
    if (error) {
      toast.error(error);
    }
  }, [currentUser, error, navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-green-50">
      <ToastContainer position="top-center" autoClose={1500} />
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <div className="flex justify-center mb-6">
          {/* <img src={Logo} alt="logo" className="w-[120px]" /> */}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-2 text-green-700">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-6 text-sm">Log in to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1 text-green-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 rounded-lg border ${
                errorInput.email ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-green-400`}
            />
            {errorInput.email && (
              <div className="text-red-600 text-sm mt-1">{errorInput.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1 text-green-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-2 rounded-lg border ${
                  errorInput.password ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-green-400`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 cursor-pointer text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {errorInput.password && (
              <div className="text-red-600 text-sm mt-1">{errorInput.password}</div>
            )}
          </div>

          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            {/* <Link to="/forget_password" className="text-green-600 hover:underline">
              Forgot Password?
            </Link> */}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;

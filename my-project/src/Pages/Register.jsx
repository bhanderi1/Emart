import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // ✅ Fixed missing state
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const validateForm = () => {
    const errors = {};
    if (!fname.trim()) errors.fname = "First name is required";
    if (!lname.trim()) errors.lname = "Last name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email";
    }
    if (!mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.some((user) => user.email === email)) {
      toast.error("User already exists with this email");
      return;
    }

    const newUser = { fname, lname, email, mobile, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    toast.success("Account created successfully!", {
      onClose: () => navigate("/login"),
      autoClose: 1500,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center md:px-4 py-4 bg-green-50 px-2">
      <ToastContainer position="top-center" autoClose={1500} />
      <div className="bg-white rounded-2xl shadow-[0px_9px_50px_1px_#3DB0F733] w-full max-w-md sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] max-sm:p-4 p-8 mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-2 text-green-700 max-sm:text-[18px]">
          Create an Admin Account
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm max-md:text-[12px]">
          Sign up to access your admin panel and manage your platform efficiently.
        </p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex justify-between gap-2 max-sm:block">
            <div className="mb-3 w-full">
              <label htmlFor="fname" className="block text-sm font-medium mb-1 max-md:text-[13px]">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className={`w-full p-2 rounded-lg border max-md:text-[13px] ${errors.fname ? "border-green-600" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-green-600 max-sm:text-sm`}
              />
              {errors.fname && (
                <div className="text-red-500 text-sm mt-1">{errors.fname}</div>
              )}
            </div>

            <div className="mb-3 w-full">
              <label htmlFor="lname" className="block text-sm font-medium mb-1 max-md:text-[13px]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className={`w-full p-2 rounded-lg border max-md:text-[13px] ${errors.lname ? "border-green-600" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-green-600 max-sm:text-sm`}
              />
              {errors.lname && (
                <div className="text-red-500 text-sm mt-1">{errors.lname}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium mb-1 max-md:text-[13px]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 rounded-lg border max-md:text-[13px] ${errors.email ? "border-green-600" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-green-600 max-sm:text-sm`}
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="block text-sm font-medium mb-1 max-md:text-[13px]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength={10}
              minLength={10}
              className={`w-full p-2 rounded-lg border max-md:text-[13px] ${errors.mobile ? "border-green-600" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-green-600 max-sm:text-sm`}
            />
            {errors.mobile && (
              <div className="text-red-500 text-sm mt-1">{errors.mobile}</div>
            )}
          </div>

          <div className="mb-3 relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1 max-md:text-[13px]">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-2 rounded-lg border max-md:text-[13px] ${errors.password ? "border-green-600" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-green-600 max-sm:text-sm`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>

          <div className="mb-3 relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1 max-md:text-[13px]">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}  // 👈 Toggle type
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full p-2 rounded-lg border max-md:text-[13px] ${errors.confirmPassword ? "border-green-600" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-green-600 max-sm:text-sm`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-600"
              >
                {showConfirmPassword  ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>


            {errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </div>
            )}
          </div>


          <button
            type="submit"
            className="w-full bg-green-600 text-white  py-2 md:py-3 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>


          <p className="mt-4 text-center text-sm max-md:text-[13px]">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;

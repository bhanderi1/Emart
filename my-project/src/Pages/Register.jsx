import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!fname.trim()) errors.fname = "First name is required";
    if (!lname.trim()) errors.lname = "Last name is required";

    if (!email.trim()) {
      errors.email = "Please enter an email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    if (!password.trim()) {
      errors.password = "Please enter a password";
    } else if (password.length < 8 || password.length > 16) {
      errors.password = "Password must be 8–16 characters";
    } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)) {
      errors.password = "Password must include uppercase, number, and special character";
    }

    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const existingUser = JSON.parse(localStorage.getItem("user"));
      if (existingUser && existingUser.email === email) {
        toast.error("User already exists with this email");
        return;
      }

      const userData = {
        firstName: fname,
        lastName: lname,
        email,
        mobile,
      };

      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Account created successfully!", {
        onClose: () => navigate("/"),
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-green-50">
      <ToastContainer position="top-center" autoClose={1500} />

      <div className="bg-white rounded-2xl shadow-[0px_9px_50px_1px_#3DB0F733] w-full max-w-md sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] max-sm:p-4 p-8 mx-auto">
        <div className="flex justify-center mb-6 max-sm:mb-4 max-sm:mt-[10px]">
          {/* <img src={Logo} alt="logo" className="w-[120px]" /> */}
        </div>
        <h2 className="text-2xl font-semibold text-center mb-2 text-green-700">Create an Admin Account</h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Sign up to access your admin panel and manage your platform efficiently.
        </p>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className='flex justify-between gap-5 max-sm:block'>
            <div className="mb-3 w-full">
              <label htmlFor="fname" className="block text-sm font-medium mb-1">First Name</label>
              <input
                id="fname"
                type="text"
                placeholder="First Name..."
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className={`w-full p-2 max-sm:p-2 rounded-lg border ${errors.fname ? 'border-green-600' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-green-600 max-sm:text-sm`}
              />
              {errors.fname && <div className="text-green-600 text-sm mt-1">{errors.fname}</div>}
            </div>

            <div className="mb-3 w-full">
              <label htmlFor="lname" className="block text-sm font-medium mb-1">Last Name</label>
              <input
                id="lname"
                type="text"
                placeholder="Last Name..."
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className={`w-full p-2 max-sm:p-2 rounded-lg border ${errors.lname ? 'border-green-600' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-green-600 max-sm:text-sm`}
              />
              {errors.lname && <div className="text-green-600 text-sm mt-1">{errors.lname}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 max-sm:p-2 rounded-lg border ${errors.email ? 'border-green-600' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-green-600 max-sm:text-sm`}
            />
            {errors.email && <div className="text-green-600 text-sm mt-1">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              id="mobile"
              type="text"
              placeholder="Phone Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength={10}
              minLength={10}
              className={`w-full p-2 max-sm:p-2 max-sm:text-sm rounded-lg border ${errors.mobile ? 'border-green-600' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-green-600`}
            />
            {errors.mobile && <div className="text-green-600 text-sm mt-1">{errors.mobile}</div>}
          </div>

          <div className="mb-3 relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 max-sm:p-2 max-sm:text-sm rounded-lg border ${errors.password ? 'border-green-600' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-green-600`}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-9 right-3 max-sm:top-9 cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              onClick={() => setShowPassword(!showPassword)}
            >
              <path
                d="M9.99994 15.8334C8.63317 15.8504 7.28052 15.5554 6.04494 14.9709C5.08718 14.5036 4.22715 13.8582 3.51077 13.0692C2.75196 12.2535 2.15449 11.3014 1.74994 10.2634L1.6666 10L1.7541 9.73671C2.15895 8.69957 2.75513 7.74777 3.5116 6.93088C4.22772 6.14197 5.08747 5.4966 6.04494 5.02921C7.28053 4.4447 8.63317 4.14972 9.99994 4.16671C11.3667 4.14975 12.7193 4.44473 13.9549 5.02921C14.9127 5.49649 15.7728 6.14187 16.4891 6.93088C17.2493 7.74551 17.847 8.69785 18.2499 9.73671L18.3333 10L18.2458 10.2634C16.9384 13.6665 13.6451 15.8912 9.99994 15.8334ZM9.99994 5.83338C7.16316 5.74448 4.55945 7.39596 3.43077 10C4.55927 12.6043 7.1631 14.2558 9.99994 14.1667C12.8366 14.2554 15.4402 12.604 16.5691 10C15.4419 7.39469 12.8372 5.74261 9.99994 5.83338ZM9.99994 12.5C8.79771 12.508 7.75774 11.6645 7.51741 10.4865C7.27707 9.30853 7.9035 8.12506 9.01276 7.66143C10.122 7.19779 11.4043 7.58349 12.0737 8.58213C12.7431 9.58077 12.6127 10.9134 11.7624 11.7634C11.2969 12.2344 10.6622 12.4997 9.99994 12.5Z"
                fill="#9CA3AF"
              ></path>
            </svg>
            {errors.password && <div className="text-green-600 text-sm mt-1">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full p-2 max-sm:p-2 max-sm:text-sm rounded-lg border ${errors.confirmPassword ? 'border-green-600' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-green-600`}
            />
            {errors.confirmPassword && <div className="text-green-600 text-sm mt-1">{errors.confirmPassword}</div>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;

import React, { useContext, useEffect, useState } from "react";
import sideLogo from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { FaBackward, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const { user, handleLogin } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptchaValidation = () => {
    const captchaInput = document.getElementById("captchaInput").value;
    if (validateCaptcha(captchaInput)) {
      setIsCaptchaValid(true);
      setCaptchaError("");
    } else {
      setIsCaptchaValid(false);
      setCaptchaError("Invalid Captcha. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!isCaptchaValid) {
      setCaptchaError("Please validate the captcha before logging in.");
      return;
    }

    try {
      await handleLogin(email, password).then((res) => {
        const user = res.user;
        e.target.reset();

        // console.log(user);
        Swal.fire({
          title: "User Login Successfully!",
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
        navigate(from, { replace: true });
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Link
        className="absolute top-6 text-2xl font-semibold hover:underline text-[#DBB884] left-20 flex gap-2 items-center"
        to="/"
      >
        <FaBackward></FaBackward> Go To Home
      </Link>
      <div
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Left Side - Image */}
        <div
          className="w-1/2 hidden md:flex items-center justify-center bg-gray-100"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <img
            src={sideLogo}
            alt="Side Illustration"
            className="w-3/4 h-auto"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Captcha */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Captcha
              </label>
              <LoadCanvasTemplate />
              <input
                type="text"
                id="captchaInput"
                placeholder="Enter Captcha"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={handleCaptchaValidation}
                className="w-full mt-2 bg-[#DBB884] text-white py-2 px-4 rounded-lg hover:shadow-lg transition duration-200"
              >
                Confirm Captcha
              </button>
              {captchaError && (
                <p className="text-red-500 text-sm mt-2">{captchaError}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full bg-[#DBB884] text-white py-2 px-4 rounded-lg hover:shadow-lg transition duration-200 ${
                isCaptchaValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isCaptchaValid}
            >
              Login
            </button>

            {/* Links */}
            <div className="text-center mt-4">
              <p className="text-sm text-[#DBB884]">
                New here?
                <Link
                  to="/register"
                  className="text-[#DBB884] font-medium hover:underline"
                >
                  Create a New Account
                </Link>
              </p>
              <p className="text-sm text-black mt-2">Or register in with</p>
              <div>
                <button className="p-2 btn bg-gray-100  shadow hover:bg-gray-200 w-full">
                  <FaGoogle></FaGoogle>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

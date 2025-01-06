import sideLogo from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { data, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (!data.file || data.file.length === 0) {
        console.error("No file selected!");
        return;
      }
      handleRegister(data.email, data.password).then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
      });
      const formData = new FormData();
      formData.append("file", data.file[0]); // Use the first file
      formData.append("upload_preset", "bistro_boss");

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/diqlcwhwe/image/upload`,
        formData
      );

      const photo = response.data.url;
      console.log(photo);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
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
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-4">
            <h1 className="text-2xl font-bold text-center">
              Register Our Account
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose Photo</span>
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                {...register("file", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-500">Photo is required</span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                })}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  Password Password must be more than 8 character
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500">
                  Password must be less than 20 character
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  Password must have 1 uppercase,lowercase,number and special
                  character
                </span>
              )}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute bottom-4 right-3 "
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white hover:bg-orange-600 bg-orange-500">
                Register
              </button>
            </div>
          </form>
          <p className="text-center text-orange-500 pb-4">
            Already Have An Account?
            <Link className="font-bold text-gray-700" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;

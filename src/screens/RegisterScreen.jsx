import React, { useState, useEffect } from "react";
import FormContainer from "../components/Forms/FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/Users/usersApiSlice";
import { setCredentials } from "../slices/Users/authSlice";
import { toast } from "react-toastify";
const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [register] = useRegisterMutation();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      username == null ||
      email == null ||
      password == null ||
      confirmPassword == null
    ) {
      toast.error("Please fill in all fields");
    } else if (username.length < 6 || username.length > 18) {
      toast.error("Usernames must be 6 to 18 characters long");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (error) {
        toast.error(error);
      }
    }
  };
  return (
    <FormContainer>
      <div className="font-semibold text-center text-2xl text-white mt-10">
        Register
      </div>
      <form className="flex flex-col flex-1 justify-evenly content-center text-white mb-5">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-600 border-b-2 border-black outline-0 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-600 border-b-2 border-black outline-0 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="bg-gray-600 border-b-2 border-black outline-0 text-white"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-gray-600 border-b-2 border-black outline-0 text-white"
        />
        <div className="flex flex-col text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className=" bg-blue-600 rounded w-6/12 max-w-md min-w-[70px] h-7 min-w-sm min-w-auto text-white mx-auto mb-5"
          >
            Register
          </button>
          <div className="mx-auto text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </div>
        </div>
      </form>
    </FormContainer>
  );
};

export default RegisterScreen;

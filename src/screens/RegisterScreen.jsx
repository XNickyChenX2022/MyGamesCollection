import React, { useState, useEffect } from "react";
import FormContainer from "../components/containers/FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading: isLoading }] = useRegisterMutation();
  useEffect(() => {
    if (userInfo) {
      navigate("home");
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
        navigate("home");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <FormContainer>
      <div className="font-semibold text-center text-2xl text-white mt-10">
        Register
      </div>
      <form
        spellCheck="false"
        className="flex flex-col flex-1 justify-evenly content-center text-white mb-5"
      >
        <input
          autoComplete="new-password"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-600 border-b-2 border-black outline-0 text-white"
        />
        <input
          autoComplete="new-password"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-600 border-b-2 border-black outline-0 text-white"
        />
        <input
          autoComplete="new-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-600 border-b-2 border-black outline-0 text-white"
        />
        <input
          autoComplete="new-password"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-gray-600 border-b-2 border-black outline-0 text-white"
        />
        <div className="flex flex-col text-center justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className=" bg-blue-600 rounded w-6/12 max-w-md min-w-[70px] h-7 min-w-sm min-w-auto text-white mx-auto mb-5"
          >
            {isLoading ? (
              <div className="flex flex-1 justify-center">
                <Spinner />
              </div>
            ) : (
              "Register"
            )}
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

import React, { useState, useEffect } from "react";
import FormContainer from "../components/Forms/FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/Users/usersApiSlice";
import { setCredentials } from "../slices/Users/authSlice";
import { toast } from "react-toastify";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <FormContainer>
      <div className="font-semibold text-center text-2xl text-white mt-10">
        Login
      </div>
      <form className="flex flex-col flex-1 justify-evenly content-center mb-5">
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
        <div className="flex flex-col text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className=" bg-blue-600 rounded w-6/12 max-w-md min-w-[70px] h-7 min-w-sm min-w-auto text-white mx-auto mb-5"
          >
            Login
          </button>
          <div className="mx-auto text-white">
            New User?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </Link>
          </div>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginScreen;

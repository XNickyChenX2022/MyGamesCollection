import React, { useState, useEffect } from "react";
import FormContainer from "../components/containers/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import InputContainer from "../components/containers/InputContainer";

const ProfileScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const [updateProfile] = useUpdateUserMutation();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);
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
        const res = await updateProfile({
          _id: userInfo._id,
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile Updated");
      } catch (error) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <FormContainer>
      <div className="font-semibold text-center text-2xl text-white mt-5">
        Update Profile
      </div>
      <form className="flex flex-col flex-1 justify-evenly content-center text-white mb-2">
        <InputContainer
          label="Username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputContainer
          label="Email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputContainer
          label="Password"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <InputContainer
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="flex flex-col text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className=" bg-blue-600 rounded w-6/12 max-w-md min-w-[70px] h-7 min-w-sm min-w-auto text-white mx-auto"
          >
            {isLoading ? (
              <div className="flex flex-1 justify-center">
                <Spinner />
              </div>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default ProfileScreen;

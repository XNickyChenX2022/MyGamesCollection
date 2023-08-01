import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const BackArrow = ({ size }) => {
  const navigate = useNavigate();
  return (
    <Link onClick={() => navigate(-1, { replace: true })}>
      <FaArrowLeft
        className={`hover:bg-gray-500 cursor-pointer text-white ${
          size ? size : "w-5 h-5"
        } rounded-full mb-3`}
      />
    </Link>
  );
};

export default BackArrow;

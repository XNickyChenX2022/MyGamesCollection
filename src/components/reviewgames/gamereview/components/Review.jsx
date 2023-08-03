import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useReviewGameMutation } from "../../../../slices/gamesApiSlice";
import { toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";
const Review = ({ gameReview }) => {
  const [toggleReview, setToggleReview] = useState(false);
  const [textareaValue, setTextareaValue] = useState(gameReview.review);
  const [reviewGame, { isLoading: isLoading }] = useReviewGameMutation();
  const handleToggleReview = (e) => {
    e.preventDefault();
    setToggleReview(!toggleReview);
  };
  const handleTab = (e) => {
    if (e.key == "Tab") {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newValue =
        textareaValue.substring(0, selectionStart) +
        "\t" +
        textareaValue.substring(selectionEnd);
      setTextareaValue(newValue);
    }
  };
  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await reviewGame({ _id: gameReview._id, review: textareaValue });
      setToggleReview(!toggleReview);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="items-center flex justify-center text-white bg-gray-600">
          Review
        </div>
        {toggleReview ? (
          <div className="flex">
            {isLoading ? (
              <Spinner />
            ) : (
              <FaSave
                className=" text-white w-8 h-8 p-1 cursor-pointer hover:text-blue-500"
                onClick={submitReview}
              />
            )}
            <ImCancelCircle
              className="text-white text-3xl w-8 h-8 p-1 cursor-pointer hover:text-blue-500"
              onClick={handleToggleReview}
            />
          </div>
        ) : (
          <FaEdit
            className="text-white w-8 h-8 p-1 cursor-pointer hover:text-blue-500"
            onClick={handleToggleReview}
          />
        )}
      </div>
      {toggleReview ? (
        <>
          <textarea
            spellCheck="false"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            onKeyDown={handleTab}
            className="resize-none scrollbar-small md:w-[360px] md:h-[416px] w-[240px] h-[260px] p-1 outline-none rounded bg-gray-400 border-2 border-gray-500"
          />
        </>
      ) : (
        <>
          <pre className="font-sans scrollbar-small md:w-[360px] md:h-[416px]  w-[240px] h-[260px] p-1 whitespace-break-spaces overflow-y-auto overflow-x-hidden break-words text-white justify-center">
            {gameReview.review}
          </pre>
        </>
      )}
    </>
  );
};

export default Review;

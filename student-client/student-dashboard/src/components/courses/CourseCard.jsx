import React, { useState } from "react";

const CourseCard = ({ id, src, name, category, desc, video }) => {
  const [completed, setCompleted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleVideoClick = () => {
    console.log("Video clicked:", video);
    window.open(video, "_blank");
  };

  const handleMarkAsCompleted = () => {
    setCompleted(true);
  };

  const handleToggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={src}
        className="h-[300px] w-full rounded-md object-cover"
        alt={`${name} cover`}
      />
      <div className="p-4 flex-col items-center text-center">
        <h1 className="text-lg font-semibold mb-2">{name}</h1>
        <p>{desc}</p>
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            className={`w-full h-[40px] rounded-sm ${
              completed ? "bg-green-500" : "bg-yellow-500"
            } text-orange-950 text-base px-2.5 py-1 text-[10px] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
            onClick={handleVideoClick}
          >
            {"Get to Course"}
          </button>
          {!completed && (
            <button
              type="button"
              className="w-full h-[40px] rounded-sm bg-gray-300 text-gray-700 text-base px-2.5 py-1 text-[10px] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleMarkAsCompleted}
            >
              Mark as done
            </button>
          )}
          </div>

          <button
            type="button"
            className={`w-full mt-2 h-[40px] rounded-sm ${
              bookmarked ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            } text-base px-2.5 py-1 text-[10px] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
            onClick={handleToggleBookmark}
          >
            {bookmarked ? "Saved" : "Bookmark"}
          </button>
      </div>
    </div>
  );
};

export default CourseCard;

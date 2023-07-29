import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function CourseCard({ imageSrc, title, description, progress }) {
  return (
    <div className="bg-white  rounded-lg shadow-md p-4 w-full">
      <img
        className="w-full h-32 object-cover rounded-lg mb-4"
        src={imageSrc}
        alt={title}
      />
      <h1 className="text-black font-bold mb-2">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faPlayCircle} className="text-gray-600" />
        </div>
        <div className="flex-1 ml-4">
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <span className="ml-2">{progress}%</span>
      </div>
    </div>
  );
}

export default CourseCard;

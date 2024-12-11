import React from "react";
import starIcon from "../../assets/images/Star.png"; // Ensure this image exists in your project.
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating = "N/A",
    totalRating = "0",
    photo,
    specialization = "General Practitioner",
    experiences = [],
  } = doctor;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={photo || "https://via.placeholder.com/150"}
        className="w-full h-48 object-cover"
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <div className="mt-2 flex items-center justify-between">
          <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded text-sm font-medium">
            {specialization}
          </span>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <img src={starIcon} alt="Star" className="w-4 h-4" />
            <span>{avgRating}</span>
            <span>({totalRating})</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {experiences.length > 0
            ? `At ${experiences[0]?.hospital}`
            : "Experience not available"}
        </p>
        <Link
          to={`/doctors/${doctor._id}`}
          className="mt-4 inline-block w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition"
        >
          <BsArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;

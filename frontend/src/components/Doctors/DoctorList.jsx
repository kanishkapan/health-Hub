import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorCard from './DoctorCard'; // Adjust the import path as necessary

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      const options = {
        method: 'GET',
        url: 'https://indian-doctors-and-jaipur-medical-professionals.p.rapidapi.com/doctors/all',
        headers: {
          'x-rapidapi-key': '215ca967ebmsha2a66f0f3d11471p14414djsn50952a051732',// Replace with your RapidAPI key
          'x-rapidapi-host': 'indian-doctors-and-jaipur-medical-professionals.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setDoctors(response.data); // Assuming the API returns an array of doctors
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;

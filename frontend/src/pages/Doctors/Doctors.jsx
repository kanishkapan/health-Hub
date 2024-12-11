import React, { useState } from 'react';
import DoctorCard from '../../components/Doctors/DoctorCard'; // Adjust the import path as necessary
const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    rating: 4.5,
    totalRatings: 120,
    availableTimings: '9:00 AM - 5:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    rating: 4.7,
    totalRatings: 98,
    availableTimings: '10:00 AM - 6:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialization: 'Neurologist',
    rating: 4.8,
    totalRatings: 150,
    availableTimings: '8:00 AM - 4:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Dr. Michael Brown',
    specialization: 'Pediatrician',
    rating: 4.6,
    totalRatings: 110,
    availableTimings: '11:00 AM - 7:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Dr. Sarah Davis',
    specialization: 'Gastroenterologist',
    rating: 4.4,
    totalRatings: 95,
    availableTimings: '7:00 AM - 3:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Dr. William Martinez',
    specialization: 'Orthopedic Surgeon',
    rating: 4.9,
    totalRatings: 130,
    availableTimings: '9:00 AM - 5:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Dr. Linda Wilson',
    specialization: 'Endocrinologist',
    rating: 4.3,
    totalRatings: 85,
    availableTimings: '10:00 AM - 6:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Dr. James Taylor',
    specialization: 'Ophthalmologist',
    rating: 4.7,
    totalRatings: 105,
    availableTimings: '8:00 AM - 4:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Dr. Barbara Moore',
    specialization: 'Psychiatrist',
    rating: 4.5,
    totalRatings: 115,
    availableTimings: '11:00 AM - 7:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Dr. Robert Anderson',
    specialization: 'Urologist',
    rating: 4.6,
    totalRatings: 90,
    availableTimings: '7:00 AM - 3:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 11,
    name: 'Dr. Robert Anderson',
    specialization: 'Urologist',
    rating: 4.6,
    totalRatings: 90,
    availableTimings: '7:00 AM - 3:00 PM',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 12,
    name: 'Dr. Robert Anderson',
    specialization: 'Urologist',
    rating: 4.6,
    totalRatings: 90,
    availableTimings: '7:00 AM - 3:00 PM',
    image: 'https://via.placeholder.com/150',
  },
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Find a Doctor</h2>
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name or specialization"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;

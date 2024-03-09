import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../../public/assets/Logo.jpeg";

const Dashboard: React.FC = () => {
  const user = useSelector((state) => state.user);

  // State variables for user information
  const [userImage, setUserImage] = useState<string>(user.picturePath);
  const [email, setEmail] = useState<string>(user.email);
  const [name, setName] = useState<string>(user.name);

  // State variables for diet requirements
  const [calories, setCalories] = useState<number>(0);
  const [proteins, setProteins] = useState<number>(0);
  const [fats, setFats] = useState<number>(0);

  // Functions to update user information
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="flex h-screen">
      {/* Left partition */}
      <div
        className="w-1/2 bg-white p-4 flex items-center justify-center"
        style={{ color: "#4d3319" }}
      >
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="h-24 w-24 rounded-full mx-auto mb-4"
          />
          <p className="text-center text-3xl font-bold">
            FOODIE WITH RIGHT CHOICE
          </p>
        </div>
      </div>

      {/* Right partition */}
      <div
        className="w-1/2 bg-gray-800 p-8 flex flex-col justify-center"
        style={{ color: "white" }}
      >
        {/* User Information */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={`http://localhost:8000/assests/${user?.picturePath}`}
            alt="User"
            className="h-32 w-32 rounded-full mb-4"
          />
          <div className="text-center mb-4">
            <label className="block mb-1 text-gray-400">Email:</label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="border-b border-gray-400 focus:outline-none bg-gray-700 text-white placeholder-gray-400 w-full py-1 px-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="text-center mb-4">
            <label className="block mb-1 text-gray-400">Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="border-b border-gray-400 focus:outline-none bg-gray-700 text-white placeholder-gray-400 w-full py-1 px-2"
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* Diet Requirements */}
        <div>
          <h2 className="text-lg font-bold mb-2">Diet Requirements</h2>
          <p>Calories: {calories}</p>
          <p>Proteins: {proteins}</p>
          <p>Fats: {fats}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

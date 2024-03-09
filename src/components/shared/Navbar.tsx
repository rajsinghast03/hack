import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { user } from "./../shared/Login";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // Add your search logic here
    navigate(`/category/${searchTerm}`);

    // Reset the search input
    setSearchTerm("");
  };

  return (
    <nav className=" p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-black text-lg font-bold space-x-2 flex items-center justify-center"
        >
          <img
            src="/assets/Logo.jpeg"
            height={56}
            width={56}
            className="rounded-full"
          />
          <p className="font-semibold">Recipe Right 1.0</p>
        </Link>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2 px-9 py-2 border rounded-full focus:outline-none focus:border-blue-500 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Search
          </button>
        </form>
        <Link to="/" className="text-black text-lg font-bold">
          {/* <div className="flex space-x-2 items-center justify-center">
            <p className="text-light-4 font-semibold">{user?.name}</p>
            <img
              src={`http://localhost:8000/assests/${user?.picturePath}`}
              height={36}
              width={36}
            />
          </div> */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

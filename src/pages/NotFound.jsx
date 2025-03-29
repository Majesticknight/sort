import { Link } from "react-router-dom";
import { Bug } from "lucide-react";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar/>
    <div className="h-screen bg-gray-800 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Bug className="w-16 h-16 sm:w-32 sm:h-32" />
        <h2 className="text-gray-400 text-2xl text-center">
          Error 404! Page Not Found
        </h2>
        <Link
          to="/"
          className="text-xl text-gray-400 bg-gray-600 rounded-lg mt-2 p-2 cursor-pointer 
                hover:bg-gray-700 hover:text-gray-300"
        >
          Home
        </Link>
      </div>
    </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Home, Info, UserRoundCogIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-16 w-screen bg-gray-400 flex justify-between items-center pl-4 fixed top-0 left-0">
      <Link to="/" className="font-medium text-xl">Sorting</Link>
      
      {/* Navigation Links Container */}
      <div className="h-16 w-48 bg-amber-400 flex justify-evenly items-center px-4">
        <Link to="/">
          <Home className="w-6 h-6 sm:w-5 sm:h-5 cursor-pointer hover:text-amber-700" />
        </Link>
        <Link to="/about">
          <Info className="w-6 h-6 sm:w-5 sm:h-5 cursor-pointer hover:text-amber-700" />
        </Link>
        <Link to="/account">
          <UserRoundCogIcon className="w-6 h-6 sm:w-5 sm:h-5 cursor-pointer hover:text-amber-700" />
        </Link>
      </div>
    </nav>
  );
}

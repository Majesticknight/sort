import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* content */}
      <section className="h-screen bg-gray-700 flex flex-col justify-center">
        {/* 1st array */}
        <div className="flex justify-center text-xl text-amber-400">
          <div className="border-1 px-6 py-4">4</div>
          <div className="border-1 px-6 py-4">2</div>
          <div className="border-1 px-6 py-4">1</div>
          <div className="border-1 px-6 py-4">5</div>
          <div className="border-1 px-6 py-4">3</div>
        </div>
        {/* arrow down */}
        <p className="flex justify-center text-5xl text-amber-500">&#8595;</p>
        {/* 2nd Array */}
        <div className="flex justify-center pt-2 text-xl text-amber-400">
          <div className="border-1 px-6 py-4">1</div>
          <div className="border-1 px-6 py-4">2</div>
          <div className="border-1 px-6 py-4">3</div>
          <div className="border-1 px-6 py-4">4</div>
          <div className="border-1 px-6 py-4">5</div>
        </div>
        {/* Sorting Algorithms */}
          <Link to="/sort" className="mx-auto block mt-10 p-2 text-xl cursor-pointer bg-amber-400 rounded-2xl 
          hover:bg-amber-500 hover:text-gray-700">Start Sorting</Link>
      </section>
    </div>
  );
}

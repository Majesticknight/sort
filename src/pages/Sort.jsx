import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./pages.css";
import { ArrowDownNarrowWide } from "lucide-react";

export default function Sort() {
  // input
  const [input, setInput] = useState("");
  // Unsorted Array
  const [unSorted, setUnSorted] = useState([]);

  // useState Functions
  function handleInput(e) {
    setInput(e.target.value);
  }
  function handlePush() {
    if (input !== "") {
      setUnSorted([...unSorted, parseInt(input)]);
      setInput("");
    }
  }
  return (
    <div className="w-screen h-screen bg-gray-700">
      <Navbar />
      <div className="h-screen flex flex-col justify-center">
        {/* top padding */}
        <div className="pt-16"></div>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-wrap text-xl text-amber-400">
            {unSorted.length === 0 ? (
              <div className="border-1 px-6 py-4">No items</div>
            ) : (
              unSorted.map((item, index) => (
                <div key={index} className="border-1 px-6 py-4">
                  {item}
                </div>
              ))
            )}
          </div>
          {/*  */}
          <div className="flex items-center">
            <input
              type="number"
              value={input}
              onChange={handleInput}
              className="text-center border-2 border-amber-400 rounded-lg mx-2  w-16 h-16 
              focus:outline-none text-xl text-amber-400"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="border-2 border-amber-400 rounded-lg m-2 w-16 h-14 text-lg 
            text-amber-400 hover:bg-amber-400 hover:text-gray-700"
            onClick={handlePush}
          >
            Push
          </button>
          <button
            className="flex justify-center items-center border-2 border-amber-400 rounded-lg my-2 w-16 h-14 text-lg 
            text-amber-400 hover:bg-amber-400 hover:text-gray-700"
            onClick={() => {
              setUnSorted([...unSorted].sort((a, b) => a - b));
            }}
          >
            <ArrowDownNarrowWide className="w-6 h-6 cursor-pointer hover:text-amber-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

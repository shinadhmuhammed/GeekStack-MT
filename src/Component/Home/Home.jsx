import React from "react";
import Interface from "./Interface";
import { Clock, Settings, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="flex justify-between items-center w-full h-14 rounded-full mb-8 bg-gray-900 px-4 py-3">
        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 bg-gray-800 rounded-full px-2 py-1 text-sm hover:bg-gray-700 transition">
            <Clock size={16} />
            <span>Get results in </span>
            <MessageCircle size={16}  /> 
          </button>
          <button className="text-gray-400 hover:text-gray-300 transition">
            <Settings size={20} />
          </button>
        </div>
      </div>
      <Interface />
    </div>
  );
};

export default Home;

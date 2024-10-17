import React from "react";

function SuggestionCard({ text, icon: Icon, onClick }) {
  return (
    <div
      className="bg-gray-800 rounded-lg p-4 flex flex-col justify-between h-40 cursor-pointer mt-10"
      onClick={onClick} 
    >
      <p className="text-gray-300 text-lg">{text}</p>
      <div className="self-end bg-gray-700 rounded-full p-2">
        <Icon size={20} className="text-gray-400" />
      </div>
    </div>
  );
}

export default SuggestionCard;

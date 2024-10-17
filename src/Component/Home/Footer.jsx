import { Send } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

function Footer({ onSearch, onSchoolSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "Find restaurants near me") {
      onSearch();  
    } else if (inputValue === "Find schools in Coimbatore") {
      onSchoolSearch();  
    } else {
      toast.error(
        "Please type 'Find restaurants near me' or 'Find schools in Coimbatore' to search."
      );
    }
    setInputValue("");
  };

  return (
    <>
    <div className="bg-gray-700 mt-60 rounded-full p-4 mb-4">
      <form onSubmit={handleSubmit} className="flex items-center flex-grow">
        <input
          type="text"
          placeholder="Enter your prompt here"
          value={inputValue}
          onChange={handleInputChange}
          className="bg-transparent text-gray-300 flex-grow px-4 focus:outline-none"
        />
        <button type="submit" className="bg-gray-700 rounded-full p-2">
          <Send size={20} className="text-gray-400" />
        </button>
      </form>
      
    </div>
    <div className="text-gray-400 text-sm ml-10">
    <p>coimbatore.ai may display inaccurate info, so double-check its responses.</p>
  </div>
  </>
  );
}

export default Footer;

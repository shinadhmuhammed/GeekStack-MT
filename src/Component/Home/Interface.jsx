import React, { useState } from "react";
import SuggestionCard from "../../Card/SuggestionCard";
import { Compass, Lightbulb } from "lucide-react";
import RestaurantSearchResults from "./RestaurantSearchResults";
import Footer from "./Footer";
import Header from "./Header";
import AnimatedBarLoader from "../../Loader/AnimatedBarLoader";
import SchoolSearchResults from "./SchoolSearchResult";

const Interface = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedCategory("restaurants");
      setLoading(false);
    }, 3000);
  };

  const handleSchoolSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedCategory("schools");
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="p-6 flex flex-col">
      {!selectedCategory && <Header />}

      {loading ? (
        <AnimatedBarLoader />
      ) : selectedCategory === "restaurants" ? (
        <RestaurantSearchResults />
      ) : selectedCategory === "schools" ? (
        <SchoolSearchResults />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <SuggestionCard
            text="Find restaurants near me"
            icon={Compass}
            onClick={handleSearch}
          />
          <SuggestionCard
            text="Find Schools in Coimbatore"
            icon={Lightbulb}
            onClick={handleSchoolSearch}
          />
        </div>
      )}

      <Footer onSearch={handleSearch} onSchoolSearch={handleSchoolSearch} />
    </div>
  );
};

export default Interface;

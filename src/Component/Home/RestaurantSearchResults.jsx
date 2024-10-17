import React from "react";
import RestaurantCard from "../../Card/Card"; 
import res1 from '../../Images/img1.jpg'
import res2 from '../../Images/img2.jpg'
import res3 from '../../Images/img3.jpg'

const RestaurantSearchResults = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
    <div className="mb-4 ml-0 md:ml-36 text-center md:text-left">
      <h1 className="text-white text-2xl font-semibold">
        Restaurants near me
      </h1>
      <div className="flex items-center text-gray-400 mt-2 justify-center md:justify-start">
        <div className="w-4 h-4 bg-gray-400 rounded-full mr-2 animate-pulse"></div>
        <p>Showing the result for your query</p>
      </div>
    </div>
      <RestaurantCard
        name="Haribhavanam restaurant"
        rating="4.3"
        verified={true}
        trusted={true}
        address="Avinashi road, Peelamedu, Coimbatore"
        distance="2.6 Km"
        tags={["Veg food", "South Indian"]}
        phone="06366243531"
        image={res3}
      />
      <RestaurantCard
        name="Nagerkovil Arya Bhavan"
        rating="4.2"
        verified={true}
        trusted={false}
        address="Avinashi road, Peelamedu, Coimbatore"
        distance="2.6 Km"
        tags={["Veg food", "Fast Service"]}
        phone="06366243531"
        image={res2}
      />
      <RestaurantCard
        name="Sree Annapoorna"
        rating="4.2"
        verified={true}
        trusted={false}
        address="Avinashi road, Peelamedu, Coimbatore"
        distance="2.6 Km"
        tags={["Veg food", "Fast Service"]}
        phone="06366243531"
        image={res1}
      />
    </div>
  );
};

export default RestaurantSearchResults;

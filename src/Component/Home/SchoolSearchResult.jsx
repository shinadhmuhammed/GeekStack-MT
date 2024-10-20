import React from "react";
import Card from "../../Card/Card";
import school1 from '../../Images/school1.jpg'
import school2 from '../../Images/school2.jpg'

const SchoolSearchResults = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
    <div className="mb-4 ml-0 md:ml-36 text-center md:text-left">
      <h1 className="text-white text-2xl font-semibold">
        Schools near me
      </h1>
      <div className="flex items-center text-gray-400 mt-2 justify-center md:justify-start">
        <div className="w-4 h-4 bg-gray-400 rounded-full mr-2 animate-pulse"></div>
        <p>Showing the result for your query</p>
      </div>
    </div>
      <Card
        name="Coimbatore Public School"
        rating="4.8"
        verified={true}
        address="Peelamedu, Coimbatore"
        distance="3.2 Km"
        tags={["CBSE", "Day School"]}
        phone="0422-1234567"
        image={school1}
      />
      <Card
        name="Nirmala Matha Convent School"
        rating="4.5"
        verified={true}
        address="Race Course, Coimbatore"
        distance="4.5 Km"
        tags={["ICSE", "Convent"]}
        phone="0422-7654321"
        image={school2}
      />
    </div>
  );
};

export default SchoolSearchResults;

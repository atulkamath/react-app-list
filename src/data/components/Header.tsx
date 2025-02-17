import React from "react";

const Header = () => {
  const headerItems = [
    "Electronics",
    "Food",
    "Deals",
    "Headphones",
    "Clearance",
  ];
  return (
    <div className="overflow-x-scroll flex absolute top-5 left-5 space-x-5 sm:space-x-10 sm:justify-center sm:relative sm:top-0 sm:left-0">
      {headerItems.map((data, index) => (
        <ul key={index}>
          <li>{data}</li>
        </ul>
      ))}
    </div>
  );
};

export default Header;

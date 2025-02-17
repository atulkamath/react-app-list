import React from "react";
import { NavLink, Route, Routes } from "react-router";

const Header = () => {
  const headerItems = [
    "Home",
    "Electronics",
    "Food",
    "Deals",
    "Headphones",
    "Clearance",
  ];
  return (
    <>
      <nav>
        <ul className="overflow-x-scroll flex absolute top-5 left-5 space-x-5 sm:space-x-10 sm:justify-center sm:relative sm:top-0 sm:left-0">
          {headerItems.map((data, index) => (
            <li key={index}>
              <NavLink to={data === "Home" ? "/" : `/${data.toLowerCase()}`}>
                {data}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<MockPage title="Home page" />} />
        <Route
          path="/electronics"
          element={<MockPage title="Electronics page" />}
        />
        <Route path="/food" element={<MockPage title="Food page" />} />
        <Route path="/deals" element={<MockPage title="Deals page" />} />
        <Route
          path="/headphones"
          element={<MockPage title="Headphones page" />}
        />
        <Route
          path="/clearance"
          element={<MockPage title="Clearance page" />}
        />
      </Routes>
    </>
  );
};

const MockPage: React.FC<{ title: string }> = ({ title }) => {
  return <h1 className="mt-10">{title}</h1>;
};

export default Header;

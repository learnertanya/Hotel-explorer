import React from "react";
import { Tabs, TabList, Tab, Box } from "@chakra-ui/react";
import usePropertyStore from "../utils/zustand";
import {defaultItems} from '../constants/defaultIndex'
import "../styles/navbar.css";

const Navbar = () => {
  const { cityData, setHotelData, activeTab,setCurrentIndex } = usePropertyStore();

  const handleTabChange = (city) => {
    setCurrentIndex(defaultItems)
    setHotelData(city);
  };
  return (
    <div>
      <Box>
        {/* Navbar */}
        <Box className="navbar-container">
          <div>
            <h1 className="title">Feature Listed Property</h1>
            <p className="description">
              Search Real Estate Properties in India at Magicbricks, the best
              property site in India. Buy, Sell, Rent residential and commercial
              properties.
            </p>
          </div>
        </Box>
      </Box>

      {/* Navigation tabs */}
      <Tabs
        variant="enclosed"
        colorScheme="green"
        className="tabs-container"
        mt="4"
      >
        <TabList>
          {[...cityData].map((city, index) => (
            <Tab
              key={index}
              className={`tab ${city === activeTab ? "active" : ""}`}
              onClick={() => handleTabChange(city)}
            >
              {city}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  );
};

export default Navbar;

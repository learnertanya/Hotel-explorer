import React from "react";
import Navbar from "./components/navbar";
import PropertyCard from "./components/PropertyCard";
import ShowMore from './components/ShowMore'

function App() {
  return (
    <div>
      {/* Pass Zustand state and actions as props to Navbar */}
      <Navbar />

      {/* Display property cards based on the active tab */}
      <PropertyCard />
      <ShowMore />
    </div>
  );
}

export default App;

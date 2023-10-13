import React, { useState } from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties }) => {
  const [visibleProperties, setVisibleProperties] = useState(3);

  const handleShowMore = () => {
    setVisibleProperties((prev) => prev + 3);
  };

  return (
    <>
      <SimpleGrid columns={3} spacing={4}>
        {properties.slice(0, visibleProperties).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </SimpleGrid>
      {visibleProperties < properties.length && (
        <Button onClick={handleShowMore} mt="4">
          Show More
        </Button>
      )}
    </>
  );
};

export default PropertyList;

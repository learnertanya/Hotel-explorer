import React from "react";
import { Box, Image } from "@chakra-ui/react";
import usePropertyStore from "../utils/zustand";

function PropertyCard() {
  const { hotelData,currentIndex } = usePropertyStore();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {hotelData.slice(0,currentIndex).map((property) => (
        <Box key={property.id} flexBasis="30%" m="2">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.src} alt={property.name} />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.bed} beds &bull; {property.bath} baths &bull; $
                  {property.rent} rent
                </Box>
              </Box>
              <Box
                mt="3"
                fontWeight="semibold"
                as="h3"
                lineHeight="tight"
                isTruncated
              >
                {property.name}, {property.city}
              </Box>
              <Box>
                <Box as="span" fontSize="sm" color="gray.600">
                  {property.rooms} rooms &bull; {property.address}
                </Box>
                <Box as="span" fontSize="sm" color="gray.600" ml="2">
                &bull; {property.squareft} sqft
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default PropertyCard;

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Box
} from "@chakra-ui/core";

export const PlantListItem = () => (
  <AccordionItem>
    <AccordionHeader px={6}>
      <Box flex={1} textAlign="left">
        Aloe vera 💧 🌱 🐄
      </Box>
      <AccordionIcon />
    </AccordionHeader>

    <AccordionPanel pb={4} px={6}>
      Aloe vera is a succulent plant species of the genus Aloe. An evergreen
      perennial, it originates from the Arabian Peninsula, but grows wild in
      tropical, semi-tropical, and arid climates around the world. It is
      cultivated for agricultural and medicinal uses. The species is also used
      for decorative purposes and grows successfully indoors as a potted plant.
    </AccordionPanel>
  </AccordionItem>
);

type PlantListProps = {
  children: JSX.Element;
};

export const PlantList = ({ children }: PlantListProps) => (
  <Accordion allowMultiple>{children}</Accordion>
);

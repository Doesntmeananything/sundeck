import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from "@chakra-ui/core";
import { PlantDetails } from "./PlantDetails";

export const PlantList = () => (
  <Accordion allowToggle>
    <AccordionItem>
      <AccordionHeader px={6}>
        <Box flex={1} textAlign="left">
          Aloe vera 💧 🌱 🐄
        </Box>
        <AccordionIcon />
      </AccordionHeader>

      <AccordionPanel pb={4} px={6}>
        <PlantDetails />
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <AccordionHeader px={6}>
        <Box flex={1} textAlign="left">
          Aloe vera 💧 🌱 🐄
        </Box>
        <AccordionIcon />
      </AccordionHeader>

      <AccordionPanel pb={4} px={6}>
        <PlantDetails />
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <AccordionHeader px={6}>
        <Box flex={1} textAlign="left">
          Aloe vera 💧 🌱 🐄
        </Box>
        <AccordionIcon />
      </AccordionHeader>

      <AccordionPanel pb={4} px={6}>
        <PlantDetails />
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

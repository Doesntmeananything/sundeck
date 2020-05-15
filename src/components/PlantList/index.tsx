import { Accordion } from "@chakra-ui/core";
import { PlantListItem } from "./PlantListItem";

export const PlantList = () => {
  return (
    <Accordion allowMultiple>
      <PlantListItem />
    </Accordion>
  );
};

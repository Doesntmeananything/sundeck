import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Editable,
  EditablePreview,
  EditableInput
} from "@chakra-ui/core";

export const PlantListItem = () => (
  <AccordionItem>
    <AccordionHeader>
      <Editable flex="1" textAlign="left" defaultValue="Aloe vera">
        <EditablePreview />
        <EditableInput />
      </Editable>
      <AccordionIcon />
    </AccordionHeader>

    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
);

type PlantListProps = {
  children: JSX.Element;
};

export const PlantList = ({ children }: PlantListProps) => (
  <Accordion allowMultiple>{children}</Accordion>
);

import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Stack,
  Tooltip
} from "@chakra-ui/core";
import { useState } from "react";

type EditingState = "initial" | "editing";
type EditableProps = {
  onRequestEdit: () => void;
};

const editPlantMessage = "Edit your plant name";
const confirmEditMessage = "Confirm your new plant name";

export const PlantDetails = () => {
  const [editingState, setEditingState] = useState<EditingState>("initial");

  const changeEditingState = (state: EditingState) => () => {
    setEditingState(state);
  };

  const editingLabel =
    editingState === "initial" ? editPlantMessage : confirmEditMessage;

  return (
    <Box>
      <Editable
        defaultValue="Aloe vera"
        placeholder="Aloe vera"
        fontSize="xl"
        onEdit={changeEditingState("editing")}
        onSubmit={changeEditingState("initial")}
      >
        {({ onRequestEdit }: EditableProps) => (
          <Stack isInline spacing={2} shouldWrapChildren>
            <>
              <EditablePreview />
              <EditableInput />
            </>
            <Tooltip
              hasArrow
              label={editingLabel}
              aria-label={editingLabel}
              placement="top"
            >
              <IconButton
                size="xs"
                icon={editingState === "initial" ? "edit" : "check"}
                onClick={onRequestEdit}
                aria-label={editingLabel}
              />
            </Tooltip>
          </Stack>
        )}
      </Editable>
    </Box>
  );
};

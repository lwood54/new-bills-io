import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import AddModal from "./add-modal";

const AddRemoveBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <HStack w="100%">
      <Text>Add Bill</Text>
      <IconButton
        size="sm"
        aria-label="Search database"
        icon={<AddIcon />}
        onClick={handleOpen}
      />
      <AddModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </HStack>
  );
};

export default AddRemoveBar;

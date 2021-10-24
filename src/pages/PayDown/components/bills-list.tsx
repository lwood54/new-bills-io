import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  HStack,
  IconButton,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import * as React from "react";
import { BillsContext } from "../../../contexts/bills-list-context";

const BillsTable: React.FC = () => {
  const { state } = React.useContext(BillsContext);

  const handleEdit = () => {
    console.log("editing item");
  };

  const handleRemove = () => {
    console.log("removing item");
  };

  const getDaySuffix = (day: number) => {
    const stNumbers = [1, 21, 31];
    const ndNumbers = [2, 22];
    const rdNumbers = [3, 23];
    switch (true) {
      case stNumbers.find((num) => num === day) === day:
        return `${day}st`;
      case ndNumbers.find((num) => num === day) === day:
        return `${day}nd`;
      case rdNumbers.find((num) => num === day) === day:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  return (
    <Accordion allowToggle allowMultiple w="100%">
      {state.listOfBills.map((bill, i) => {
        return (
          <AccordionItem
            key={bill.uuid}
            bg={i % 2 === 0 ? "teal.100" : "gray.100"}
          >
            <AccordionButton textAlign="left">
              <HStack spacing="10" w="100%">
                <Stat>
                  <StatLabel>{bill.name}</StatLabel>
                  <StatNumber>${bill.balance}</StatNumber>
                </Stat>
                <AccordionIcon />
              </HStack>
            </AccordionButton>
            <AccordionPanel bg="white" pb="3">
              <VStack>
                <HStack w="100%" justifyContent="space-between">
                  <Text fontSize="sm" color="gray.600">
                    Due on the {getDaySuffix(bill.dueDate)} of the month
                  </Text>
                  <HStack>
                    <IconButton
                      size="sm"
                      aria-label="Edit bill"
                      icon={<EditIcon />}
                      onClick={handleEdit}
                      colorScheme="yellow"
                    />
                    <IconButton
                      size="sm"
                      aria-label="Remove bill"
                      icon={<DeleteIcon />}
                      onClick={handleRemove}
                      colorScheme="red"
                    />
                  </HStack>
                </HStack>
                <HStack w="100%" color="gray.700" height="50">
                  <Text>Default monthly payment: ${bill.defaulPayment}</Text>
                  <Divider orientation="vertical" />
                  <Text>Interest: {bill.interest}%</Text>
                </HStack>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default BillsTable;

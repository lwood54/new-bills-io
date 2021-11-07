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
  HStack,
  IconButton,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { getDaySuffix } from "../../../../helpers/helpers";
import { Bill, tempId } from "../../types";

const BillsTable: React.FC = () => {
  const [bills, setBills] = React.useState<Bill[]>([]);

  const getBills = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/user/${tempId}/bills`
      );
      setBills(res.data.bills);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getBills();
  }, []);

  const handleEdit = () => {
    console.log("editing item");
  };

  const handleRemove = () => {
    console.log("removing item");
  };

  return (
    <Accordion allowToggle allowMultiple w="100%">
      {bills.map((bill: Bill, i) => {
        return (
          <AccordionItem
            key={bill._id}
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
                    Due on the {getDaySuffix(bill.dayDue)} of the month
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
                  <Text>Default monthly payment: ${bill.defaultPayment}</Text>
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

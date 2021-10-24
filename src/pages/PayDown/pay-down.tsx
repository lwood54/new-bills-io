import {
  Box,
  Center,
  HStack,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import * as React from "react";
import {
  BillsActions,
  BillsContext,
  billsReducer,
  BillsState,
} from "../../contexts/bills-list-context";
import AddRemoveBar from "./components/add-remove-bar";
import BillsList from "./components/bills-list";
import { v4 as uuid } from "uuid";
import { FormProvider, useForm } from "react-hook-form";

const listOfBills = [
  {
    name: "MasterCard",
    balance: 5000,
    interest: 3,
    defaulPayment: 100,
    dueDate: 1,
  },
];

const initialBillsState = {
  listOfBills: [
    {
      name: "MasterCard",
      balance: 5000,
      interest: 3,
      defaulPayment: 100,
      dueDate: 1,
      uuid: uuid(),
    },
  ],
};

const PayDown: React.FC = () => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<BillsState, BillsActions>
  >(billsReducer, initialBillsState);

  const methods = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      balance: 0,
      interest: 0,
      defaultPayment: 0,
      dueDate: 1,
    },
  });

  return (
    <BillsContext.Provider value={{ state, dispatch }}>
      <FormProvider {...methods}>
        <Box h="max" w="100%">
          <Stack alignItems="center">
            <Text fontSize="3xl" textAlign="center">
              Bills
            </Text>
            <Stack alignItems="center" w="75%">
              <AddRemoveBar />
              <BillsList />
            </Stack>
          </Stack>
        </Box>
      </FormProvider>
    </BillsContext.Provider>
  );
};

export default PayDown;

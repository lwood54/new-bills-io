import { Box, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AddRemoveBar } from "./components/AddRemoveBar";
import { BillsList } from "./components/BillsList";
import { Bill } from "./types";

const Bills: React.FC = () => {
  const methods = useForm<Bill>({
    mode: "all",
    defaultValues: {
      balance: 0,
      dayDue: 1,
      defaultPayment: 0,
      interest: 0,
      name: "",
    },
  });
  return (
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
  );
};

export default Bills;

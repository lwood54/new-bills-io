import { AddIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { addBill, getBills, removeBill } from "../../apis/bills";
import { AddBillModal } from "./components/AddBillModal";
import { BillsList } from "./components/BillsList";
import { Bill, tempId } from "./types";

const Bills: React.FC = () => {
  const [bills, setBills] = React.useState<Bill[]>([]);
  const [isAddBillModalOpen, setIsAddBillModalOpen] = React.useState(false);

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

  const getBillsList = async (userId: string) => {
    try {
      const res = await getBills(userId);
      setBills(res.data.bills);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getBillsList(tempId);
  }, []);

  const handleAddBill = async (payload: Bill) => {
    try {
      const res = await addBill(tempId, payload);
      console.log("res", res.data);
    } catch (error) {
      console.error(error);
    } finally {
      getBillsList(tempId);
    }
  };

  const handleRemoveBill = async (billId?: string) => {
    if (!billId) return;
    try {
      const res = await removeBill(tempId, billId);
      console.log("res when bill removed", res);
    } catch (error) {
      console.error(error);
    } finally {
      getBillsList(tempId);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box h="max" w="100%">
        <Stack alignItems="center">
          <Text fontSize="3xl" textAlign="center">
            Bills
          </Text>
          <Stack alignItems="center" w="75%">
            <HStack w="100%">
              <Text>Add Bill</Text>
              <IconButton
                size="sm"
                aria-label="Search database"
                icon={<AddIcon />}
                onClick={() => setIsAddBillModalOpen(true)}
              />
              <AddBillModal
                onAddBill={handleAddBill}
                isOpen={isAddBillModalOpen}
                onClose={() => setIsAddBillModalOpen(false)}
              />
            </HStack>
            <BillsList bills={bills} onRemoveBill={handleRemoveBill} />
          </Stack>
        </Stack>
      </Box>
    </FormProvider>
  );
};

export default Bills;

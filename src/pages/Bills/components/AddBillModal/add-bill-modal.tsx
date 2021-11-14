import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Bill, tempId } from "../../types";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBill: (payload: Bill) => void;
}
const AddBillModal: React.FC<AddModalProps> = ({
  isOpen,
  onAddBill,
  onClose,
}) => {
  const { control, handleSubmit } = useFormContext<Bill>();

  // const addBill = async (payload: Bill) => {
  //   try {
  //     const res = await axios.put(
  //       `http://localhost:3001/api/user/${tempId}/add-bill`,
  //       payload
  //     );
  //     console.log("res", res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleFormSubmit = (payload: Bill) => {
    try {
      onAddBill(payload);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Bill</ModalHeader>
        <ModalCloseButton />
        <form id="add-bill-form" onSubmit={handleSubmit(handleFormSubmit)}>
          <ModalBody>
            <VStack>
              <FormControl id="name">
                <FormLabel>Bill Name</FormLabel>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange } }) => {
                    return <Input type="text" onChange={onChange} />;
                  }}
                />
              </FormControl>
              <FormControl id="balance">
                <FormLabel>Balance</FormLabel>
                <Controller
                  control={control}
                  name="balance"
                  render={({ field: { onChange } }) => {
                    return <Input type="number" onChange={onChange} />;
                  }}
                />
              </FormControl>
              <FormControl id="due-date">
                <FormLabel>Day Due</FormLabel>
                <Controller
                  control={control}
                  name="dayDue"
                  render={({ field: { onChange } }) => {
                    return <Input type="number" onChange={onChange} />;
                  }}
                />
              </FormControl>
              <FormControl id="interest">
                <FormLabel>Interest (%)</FormLabel>
                <Controller
                  control={control}
                  name="interest"
                  render={({ field: { onChange } }) => {
                    return <Input type="number" onChange={onChange} />;
                  }}
                />
              </FormControl>
              <FormControl id="defaultPayment">
                <FormLabel>Default Payment</FormLabel>
                <Controller
                  control={control}
                  name="defaultPayment"
                  render={({ field: { onChange } }) => {
                    return <Input date="number" onChange={onChange} />;
                  }}
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" type="submit" form="add-bill-form">
              Add Bill
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddBillModal;

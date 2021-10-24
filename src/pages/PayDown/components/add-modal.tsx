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
} from "@chakra-ui/react";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Bill,
  BillsContext,
  BILL_ACTION,
} from "../../../contexts/bills-list-context";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose }) => {
  const { dispatch } = React.useContext(BillsContext);
  const { control, handleSubmit } = useFormContext();

  const handleFormSubmit = (payload: Bill) => {
    try {
      dispatch({ type: BILL_ACTION.ADD, payload });
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <form id="add-bill-form" onSubmit={handleSubmit(handleFormSubmit)}>
          <ModalBody>
            <FormControl id="name">
              <FormLabel>Bill Name</FormLabel>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange } }) => {
                  return <Input type="name" onChange={onChange} />;
                }}
              />
            </FormControl>
            <FormControl id="balance">
              <FormLabel>Balance</FormLabel>
              <Controller
                control={control}
                name="balance"
                render={({ field: { onChange } }) => {
                  return <Input type="balance" onChange={onChange} />;
                }}
              />
            </FormControl>
            <FormControl id="due-date">
              <FormLabel>Due Date</FormLabel>
              <Controller
                control={control}
                name="dueDate"
                render={({ field: { onChange } }) => {
                  return <Input type="due-date" onChange={onChange} />;
                }}
              />
            </FormControl>
            <FormControl id="interest">
              <FormLabel>Interest</FormLabel>
              <Controller
                control={control}
                name="interest"
                render={({ field: { onChange } }) => {
                  return <Input type="interest" onChange={onChange} />;
                }}
              />
            </FormControl>
            <FormControl id="defaultPayment">
              <FormLabel>Default Payment</FormLabel>
              <Controller
                control={control}
                name="defaultPayment"
                render={({ field: { onChange } }) => {
                  return <Input type="defaultPayment" onChange={onChange} />;
                }}
              />
            </FormControl>
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

export default AddModal;

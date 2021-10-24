import * as React from "react";
import { v4 as uuid } from "uuid";

export interface Bill {
  name: string;
  balance: number;
  interest: number;
  defaulPayment: number;
  dueDate: number;
  uuid: string;
}

export interface BillsState {
  listOfBills: Bill[];
}

export const initialBillsState: BillsState = {
  listOfBills: [],
};

enum BILL_ITEM {
  NAME,
  BALANCE,
  INTEREST,
  DEFAULT_PAYMENT,
  DUE_DATE,
}

export enum BILL_ACTION {
  ADD,
  REMOVE,
}

export type BillsActions =
  | { type: BILL_ACTION.ADD; payload: Bill }
  | { type: BILL_ACTION.REMOVE; payload: Bill };
// export type BillsActions =
//   | { type: BILL_ITEM.NAME; payload: string }
//   | { type: BILL_ITEM.BALANCE; payload: number }
//   | { type: BILL_ITEM.INTEREST; payload: number }
//   | { type: BILL_ITEM.DEFAULT_PAYMENT; payload: number }
//   | { type: BILL_ITEM.DUE_DATE; payload: number };

export const billsReducer = (state: BillsState, action: BillsActions) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case BILL_ACTION.ADD:
      console.log("should add bill");
      return {
        ...state,
        listOfBills: [...state.listOfBills, action.payload],
      };
    default:
      console.log("here 2?");
      return state;
  }
};

interface BillsContextValue {
  state: BillsState;
  dispatch: React.Dispatch<BillsActions>;
}

export const BillsContext = React.createContext({
  state: initialBillsState,
} as BillsContextValue);

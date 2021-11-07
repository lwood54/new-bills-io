import * as React from "react";
import { v4 as uuid } from "uuid";

export interface Bill {
  name: string;
  balance: number;
  interest: number;
  defaultPayment: number;
  dayDue: number;
  uuid: string;
}

export interface BillsState {
  listOfBills: Bill[];
}

export const initialBillsState: BillsState = {
  listOfBills: [],
};

export enum BILL_ACTION {
  ADD,
  REMOVE,
}

export type BillsActions =
  | { type: BILL_ACTION.ADD; payload: Bill }
  | { type: BILL_ACTION.REMOVE; payload: Bill };

export const billsReducer = (state: BillsState, action: BillsActions) => {
  switch (action.type) {
    case BILL_ACTION.ADD:
      return {
        ...state,
        listOfBills: [
          ...state.listOfBills,
          {
            ...action.payload,
            uuid: uuid(),
          },
        ],
      };
    default:
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

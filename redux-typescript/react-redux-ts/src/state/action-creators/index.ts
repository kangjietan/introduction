import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAWAL,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};

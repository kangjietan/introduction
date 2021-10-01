import { ActionType } from "../action-types";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawalAction {
  type: ActionType.WITHDRAWAL;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DepositAction | WithdrawalAction | BankruptAction;

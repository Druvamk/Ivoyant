export interface intialStateProps {
  count: number;
  step: number;
}
export type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "setCount"; payload: number } // This defines the setCount action
  | { type: "setStep"; payload: number }
  | { type: "reset" };

export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEARCART = "CLEARCART";
export const GETTOTAL = "GETTOTAL";
export const TOGGLEAMOUNT = "TOGGLEAMOUNT";

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

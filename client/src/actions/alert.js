import { v4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../types";

export const setAlert = (msg, alertType, timeout = 2000) => (dispatch) => {
  const id = v4();
  dispatch({
    type: SET_ALERT,
    payload: { id, alertType, msg },
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, timeout);
};

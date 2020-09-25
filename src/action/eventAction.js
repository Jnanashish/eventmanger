import { ADD_EVENT, DELETE_EVENT, GET_EVENT } from "./action.types.js";
import axios from "axios";

export const getEvents = () => async (dispatch) => {
  const res = await axios.get("");
  dispatch({
    type: GET_EVENT,
    payload: res.data,
  });
};

export const addEvent = (events) => ({
  type: ADD_EVENT,
  payload: events,
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  payload: id,
});

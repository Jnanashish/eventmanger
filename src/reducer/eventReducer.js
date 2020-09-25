import { ADD_EVENT, DELETE_EVENT, GET_EVENT } from "../action/action.types.js";
import { v4 } from "uuid";

const intialstate = [
  {
    id: v4(),
    name: "Inauguration programe",
    detail:
      "This inauguration programe will be opened by Mr Kartik Bora, CEO of codergeek.io",
    time: "12-03-2020",
    venue: "Block 38",
  },
  {
    id: v4(),
    name: "Special Guest speaking",
    detail:
      "Our Special guest Daniel Thakur give a speech on latest technologie, he is an tech YouTuber.",
    time: "12-03-2020",
    venue: "Block 12",
  },
];

//console.log(intialstate.events);

const eventReducer = (state = intialstate, action) => {
  console.log(action.payload);
  console.log(action.type);
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];

    case DELETE_EVENT:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default eventReducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GREETING = "GREETING";
const URL = "http://localhost:3000/api/greeting";

const init = "welcome";

const greetingReducer = (state = init, action) => {
  switch (action.type) {
    case GREETING:
      return action.greeting
    default:
      return state;
  }
};

export default greetingReducer;



export const getGreeting = createAsyncThunk( GREETING, async (args, {dispatch}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  try {
    const {data} = await axios.get(URL, config);
    dispatch({ type: GREETING, greeting: data });
    console.log("data");
  } catch (err) {
    console.log(err);
  }
});

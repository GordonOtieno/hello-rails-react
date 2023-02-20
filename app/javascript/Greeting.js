import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "./redux/reducer"; 

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  return (
    <div>
      <h1>{greeting.name}</h1>
    </div>
  );
};

export default Greeting;

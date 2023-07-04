import { Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import MyButton from "./MyButton";
import { useCallback } from "react";
import { useMemo } from "react";

export default function Memoization() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  const myLabelPlus = useMemo(
    () => ({
      data: "+",
    }),
    []
  );

  const myLabelMinus = useMemo(
    () => ({
      data: "-",
    }),
    []
  );

  const slowFunc = useMemo(() => {
    console.log("The slow function is rendered");
    for (let index = 0; index < 2000000000; index++) {}
    return "hello";
  }, []);

  return (
    <div>
      <Typography>{counter}</Typography>
      <MyButton label={myLabelPlus} func={increment} />
      <MyButton label={myLabelMinus} func={decrement} />
      <Typography>{slowFunc}</Typography>
    </div>
  );
}

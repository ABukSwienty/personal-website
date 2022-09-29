import React, { RefObject, useCallback, useEffect, useState } from "react";
import { BackgroundItem } from ".";
import useSquares from "../../../hooks/use-squares";
import randomNumInterval from "../../../util/random-number";
import {
  alertDiagonals,
  alertHorizontal,
  alertVertical,
  findSquareInMatrix,
} from "./matrix";
import { pubSubSquares } from "./pub-sub";

const getRandomNumber = (max: number) => Math.floor(Math.random() * max + 1);

export interface BackgroundContextInterface {
  squareSize: number;
  amount: number;
  delay: number;
  renderables: JSX.Element[];
  matrix: number[][];
  handlePublish: (id: number) => void;
}

export const BackgroundContext =
  React.createContext<BackgroundContextInterface>({
    squareSize: 0,
    amount: 0,
    delay: 4000,
    renderables: [],
    matrix: [],
    handlePublish: () => {},
  });

const alertAllSquares = (amount: number) => {
  for (let index = 0; index < amount; index++) {
    pubSubSquares.publish(index.toString());
  }
};

export const BackgroundProvider = ({
  children,
  wrapperId,
}: React.PropsWithChildren<{
  wrapperId: string;
}>) => {
  const squareSize = 96;
  const delay = 4000;
  const [amount, setAmount] = useState(0);
  const [renderables, setRenderables] = useState<JSX.Element[]>([]);
  const [matrix, setMatrix] = useState<Array<number[]>>([]);
  const { calculateMatrix } = useSquares(wrapperId);

  const handlePublish = useCallback(
    (id: number) => {
      const square = findSquareInMatrix(id, matrix);
      if (!square) return;
      alertHorizontal({ ...square, matrix, callback: pubSubSquares.publish });
      alertVertical({ ...square, matrix, callback: pubSubSquares.publish });
      alertDiagonals({ ...square, matrix, callback: pubSubSquares.publish });
    },
    [matrix]
  );

  useEffect(() => {
    const randomInterval = setInterval(() => {
      for (
        let index = 0;
        index < getRandomNumber(Math.floor(amount / 4));
        index++
      ) {
        setTimeout(
          () => pubSubSquares.publish(getRandomNumber(amount).toString()),
          randomNumInterval(500, delay)
        );
      }
    }, delay - 500);

    const randomFlower = setInterval(() => {
      if (Math.random() > 0.9) handlePublish(getRandomNumber(amount));
    }, delay - 500);
    return () => {
      clearInterval(randomInterval);
      clearInterval(randomFlower);
    };
  }, [amount, matrix, handlePublish]);

  const calcSquares = useCallback(() => {
    const matrix = calculateMatrix(squareSize);
    if (!matrix) return;

    setMatrix(matrix.matrix);
    setAmount(matrix.total);
  }, [squareSize, calculateMatrix]);

  useEffect(() => {
    calcSquares();
  }, [calcSquares]);

  useEffect(() => {
    const handleResize = () => calcSquares();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [calcSquares]);

  useEffect(() => {
    const createRenderables = () =>
      setRenderables(
        Array.from({ length: amount }, (_, i) => (
          <BackgroundItem id={i.toString()} key={i} />
        ))
      );

    if (renderables.length === 0) createRenderables();

    const debounce = setTimeout(() => createRenderables(), 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [amount, renderables.length]);

  // all the squares
  useEffect(() => {
    const handleAllTheSquares = () => alertAllSquares(amount);
    document.addEventListener("ALL_THE_SQUARES", handleAllTheSquares);

    return () =>
      document.removeEventListener("ALL_THE_SQUARES", handleAllTheSquares);
  }, [amount]);

  return (
    <BackgroundContext.Provider
      value={{ delay, squareSize, renderables, matrix, handlePublish, amount }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

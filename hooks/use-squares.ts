import { RefObject, useCallback } from "react";

const useSquares = (id: string) => {
  const calculateMatrix = useCallback((squareSize: number) => {
    const el = document.getElementById(id);
    if (!el) return;

    const cols = Math.floor(el.offsetWidth / squareSize);
    const rows = Math.round(el.offsetHeight / squareSize);
    const total = rows * cols;
    const matrix: number[][] = [];

    let insertNumber = 0;
    for (let row = 0; row < rows; row++) {
      matrix.push([]);
      for (let col = 0; col < cols; col++) {
        matrix[row].push(insertNumber);
        insertNumber++;
      }
    }
    return {
      matrix,
      total,
    };
  }, []);

  return { calculateMatrix };
};

export default useSquares;

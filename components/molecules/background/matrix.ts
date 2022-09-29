export const findSquareInMatrix = (find: number, matrix: number[][]) => {
  const row = matrix.findIndex((rows) => rows.includes(find));
  if (!matrix[row]) return null;
  const col = matrix[row].indexOf(find);
  return {
    row,
    col,
  };
};

interface AlertArgs {
  row: number;
  col: number;
  matrix: number[][];
  amount?: number;
  callback: (arg: string) => void;
  delay?: number;
}

export const alertHorizontal = ({
  row,
  col,
  matrix,
  amount = 2,
  callback,
  delay = 100,
}: AlertArgs) => {
  for (let index = 1; index < amount + 1; index++) {
    if (matrix[row][col + index]) {
      setTimeout(
        () => callback(matrix[row][col + index].toString()),
        delay * index
      );
    }

    if (matrix[row][col - index]) {
      setTimeout(
        () => callback(matrix[row][col - index].toString()),
        delay * index
      );
    }
  }
};

export const alertVertical = ({
  row,
  col,
  matrix,
  amount = 2,
  callback,
  delay = 100,
}: AlertArgs) => {
  for (let index = 1; index < amount + 1; index++) {
    if (matrix[row + index] && matrix[row + index][col]) {
      setTimeout(
        () => callback(matrix[row + index][col].toString()),
        delay * index
      );
    }

    if (matrix[row - index] && matrix[row - index][col]) {
      setTimeout(
        () => callback(matrix[row - index][col].toString()),
        delay * index
      );
    }
  }
};

export const alertDiagonals = ({
  row,
  col,
  matrix,
  amount = 1,
  callback,
  delay = 100,
}: AlertArgs) => {
  for (let index = 1; index < amount + 1; index++) {
    // tr
    if (matrix[row + index] && matrix[row + index][col + index]) {
      setTimeout(
        () => callback(matrix[row + index][col + index].toString()),
        delay * index
      );
    }

    // tl
    if (matrix[row + index] && matrix[row + index][col - index]) {
      setTimeout(
        () => callback(matrix[row + index][col - index].toString()),
        delay * index
      );
    }

    // br
    if (matrix[row - index] && matrix[row - index][col + index]) {
      setTimeout(
        () => callback(matrix[row - index][col + index].toString()),
        delay * index
      );
    }

    // bl
    if (matrix[row - index] && matrix[row - index][col - index]) {
      setTimeout(
        () => callback(matrix[row - index][col - index].toString()),
        delay * index
      );
    }
  }
};

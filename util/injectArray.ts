/**
 * Injects an element into every other index of an array.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const injected = interjectArray(arr, 0);
 * // [1, 0, 2, 0, 3, 0, 4, 0, 5]
 *
 *
 * @param arr Array
 * @param fn callback function to inject element
 * @param odd Boolean to determine if the element should be injected into odd or even indexes
 * @param injectAtEnd Add to end of array
 * @returns
 */
const injectArray = <T>(
  arr: T[],
  fn: (index: number) => any,
  odd: boolean = false,
  injectAtEnd: boolean = false
) => {
  const copy: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (odd) copy.push(element);
    const newElement = fn(i);
    copy.push(newElement);

    if (!odd) copy.push(element);
  }
  if (!injectAtEnd) copy.pop();
  return copy;
};

export default injectArray;

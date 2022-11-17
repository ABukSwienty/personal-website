import { useCallback } from "react";

const useNavTo = (
  ref: React.RefObject<HTMLElement>,
  options?: ScrollIntoViewOptions
) => {
  const onClick = useCallback(() => {
    if (!ref.current) return;
    ref.current.scrollIntoView(options);
  }, [ref, options]);

  return onClick;
};

export default useNavTo;

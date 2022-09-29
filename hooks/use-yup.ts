import { useCallback, useState } from "react";
import * as yup from "yup";

const useYup = (schema: yup.AnySchema) => {
  const [errors, setErrors] = useState<Record<string, any>>({});

  const validate = useCallback(
    async (values: Record<string, any>) => {
      try {
        await schema.validate(values, { abortEarly: false });
        setErrors({});
        return true;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          if (error.inner.length === 0) return;
          error.inner.forEach((err) => {
            if (err.path && err.message)
              setErrors((prev) => ({
                ...prev,
                [`${err.path}`]: err.message,
              }));
          });
        }
        return false;
      }
    },
    [schema]
  );

  const resetErrors = useCallback(() => setErrors({}), []);

  return { errors, validate, resetErrors, setErrors };
};

export default useYup;

import setClassName from "../../util/set-class-name";
import IconMini from "../atoms/icon/icon-mini";
import { IconNames } from "../atoms/icon/icon-solid";

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "type"> {
  leadingIcon?: keyof IconNames;
  name: string;
  label?: string;
  error?: string;
}

const Input = ({
  leadingIcon,
  className = "",
  name,
  label,
  error,
  ...rest
}: InputProps) => {
  const classNames = setClassName([
    "border focus:outline-none appearance-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-200 dark:bg-gray-600 dark:placeholder:text-gray-100 bg-gray-50 w-full border-0",
    leadingIcon ? "pl-10" : "",
    className,
    error ? "border-red-500" : "",
  ]);
  return (
    <div className="group relative flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 text-sm font-medium tracking-wide text-gray-600 group-focus-within:text-indigo-600 dark:text-gray-400 dark:group-focus-within:text-indigo-200"
        >
          {label}
        </label>
      )}
      <div className="flex h-fit w-full items-center">
        {leadingIcon && (
          <IconMini
            icon={leadingIcon}
            size="sm"
            className="absolute left-0 ml-2 text-gray-400 group-focus-within:text-indigo-400 dark:text-gray-100 dark:group-focus-within:text-indigo-200"
          />
        )}
        <input {...rest} name={name} className={classNames} type="text" />
      </div>
      {error && (
        <span className="text-sm text-red-500 dark:text-red-400">{error}</span>
      )}
    </div>
  );
};

export default Input;

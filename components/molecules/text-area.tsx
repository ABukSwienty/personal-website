import setClassName from "../../util/set-class-name";

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
  name: string;
  label?: string;
  error?: string;
}

const TextArea = ({
  name,
  label,
  className = "",
  error,
  ...rest
}: TextAreaProps) => {
  const classNames = setClassName([
    "border focus:outline-none appearance-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-700 dark:ring-indigo-200 bg-gray-50 dark:bg-gray-600 border-0 w-full",
    className,
  ]);
  return (
    <div className="group flex h-fit w-full flex-col">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 text-sm font-medium tracking-wide text-gray-600 group-focus-within:text-indigo-600 dark:text-gray-400 dark:group-focus-within:text-indigo-200"
        >
          {label}
        </label>
      )}
      <textarea name={name} {...rest} className={classNames}></textarea>
      {error && (
        <span className="text-sm text-red-500 dark:text-red-400">{error}</span>
      )}
    </div>
  );
};

export default TextArea;

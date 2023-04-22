interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  containerClass?: string;
  value: string;
  onChange: (e: any) => void;
}

export const Input = ({
  id,
  label,
  placeholder,
  type,
  containerClass,
  onChange,
}: InputProps) => {
  return (
    <div className={`${containerClass}`}>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        id={id}
        className={`block w-full rounded-lg border border-2 border-black bg-slate-300/10 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

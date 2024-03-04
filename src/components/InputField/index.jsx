import React from "react";

function InputField({
  placeholder,
  inputLabel,
  inputId,
  inputType,
  value,
  handleInputChange,
  ...otherProps
}) {
  return (
    <div className="mb-4 flex flex-col mx-auto">
      <label
        className="text-gray-700 text-sm font-bold mb-2 self-start"
        htmlFor={inputId}
      >
        {inputLabel}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...otherProps}
        id={inputId}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputField;

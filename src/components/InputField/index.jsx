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
        className="text-dark-green text-sm font-bold mb-2 self-start"
        htmlFor={inputId}
      >
        {inputLabel}
      </label>
      <input
        className="shadow appearance-none border border-light-blue rounded w-full py-2 px-3 text-dark-green leading-tight focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent"
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

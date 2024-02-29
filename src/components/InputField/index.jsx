import React from "react";

function InputField({
  placeholder,
  inputLabel,
  inputId,
  inputType,
  value,
  handleInputChange,
}) {
  return (
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={inputId}
      >
        {inputLabel}
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

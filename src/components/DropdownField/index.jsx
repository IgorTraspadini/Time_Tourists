import { useCallback, useEffect, useState } from "react";

function DropdownField({
  currentOption,
  dropdownOptions,
  selectOption,
  placeholder,
  optionPlaceholder,
}) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleCloseDropdownWhenNonDropdownItemIsClicked = useCallback((evt) => {
    if (
      !(
        evt.target.parentElement.hasAttribute("data-dropdown-item") ||
        evt.target.hasAttribute("data-dropdown-item")
      )
    ) {
      setOpenDropdown(false);
    }
  }, []);

  useEffect(() => {
    if (openDropdown) {
      document.addEventListener(
        "click",
        handleCloseDropdownWhenNonDropdownItemIsClicked
      );
    } else {
      document.removeEventListener(
        "click",
        handleCloseDropdownWhenNonDropdownItemIsClicked
      );
    }
  }, [openDropdown]);

  return (
    <div className="mb-4 flex flex-col mx-auto relative">
      <h4 className="text-gray-700 text-sm font-bold mb-2">{placeholder}</h4>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-between"
        type="button"
        onClick={() => setOpenDropdown((prev) => !prev)}
        data-dropdown-item="true"
      >
        <span>{currentOption || optionPlaceholder}</span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 divide-y divide-gray-100 rounded-lg shadow w-full absolute top-[30%]  bg-blue-700 ${
          !openDropdown && "hidden"
        }`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full"
          aria-labelledby="dropdownDefaultButton"
        >
          {dropdownOptions.map((option) => (
            <li key={option} className="w-full" data-dropdown-item="true">
              <button
                type="button"
                className="block px-4 py-2 hover:bg-blue-900 w-full text-left bg-blue-700"
                onClick={() => {
                  selectOption(option);
                  setOpenDropdown(false);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownField;

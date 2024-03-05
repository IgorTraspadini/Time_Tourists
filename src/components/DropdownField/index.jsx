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
      <h4 className="text-dark-green text-sm font-bold mb-2">{placeholder}</h4>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-dark-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-light-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between"
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
        className={`z-10 rounded-lg shadow w-full absolute top-full mt-1 bg-light-blue ${
          !openDropdown && "hidden"
        }`}
      >
        <ul
          className="py-1 text-sm text-dark-green"
          aria-labelledby="dropdownDefaultButton"
        >
          {dropdownOptions.map((option) => (
            <li key={option} className="w-full" data-dropdown-item="true">
              <button
                type="button"
                className="block px-4 py-2 hover:bg-dark-green hover:text-white w-full text-left"
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

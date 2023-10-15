import { useState } from "react";

function Accordion({ children }) {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="p-2 mb-4 border rounded-md shadow-md">
      <div
        className="flex justify-between p-2 bg-gray-200 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold">Grafik</h3>
        <span>
          {isAccordionOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </span>
      </div>
      {isAccordionOpen && (
        <div className="flex justify-center w-full p-2 bg-white">
          <div className=" w-96 h-96">{children}</div>
        </div>
      )}
    </div>
  );
}

export default Accordion;

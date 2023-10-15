import { useState } from "react";
import DataSMA from "./DataSMA";
import DataSMK from "./DataSMK";

const Progress = () => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <div className="sm:w-96 lg:w-[480px] xl:w-[800px]">
          <div className="flex items-center justify-center w-full py-2 mx-auto font-semibold bg-white border rounded-full">
            <div
              onClick={() => setSelected(false)}
              className={`text-center px-6 py-2 ${
                selected === false
                  ? "bg-[#C81E1E] text-white"
                  : "bg-white text-[#C81E1E]"
              } rounded-3xl xl:px-11 cursor-pointer`}
            >
              SMA
            </div>
            <div
              onClick={() => setSelected(true)}
              className={`text-center px-6 py-2 ${
                selected === true
                  ? "bg-[#C81E1E] text-white"
                  : "bg-white text-[#C81E1E]"
              } rounded-3xl xl:px-11 cursor-pointer`}
            >
              SMK
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">{selected ? <DataSMA /> : <DataSMK />}</div>
    </>
  );
};

export default Progress;

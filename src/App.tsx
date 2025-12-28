import { useState } from "react";
import jeremyImage from "./assets/images/image-jeremy.png";

type Timeframe = "Daily" | "Weekly" | "Monthly";

function App() {
  const [selected, setSelected] = useState<Timeframe>("Daily");

  const handleButtonClick = (value: Timeframe) => {
    setSelected(value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0E1323]">
      <div>
        <div className="h-[518px] w-[255px] rounded-[15px] bg-[#1C204B]">
          <div className="h-[354px] rounded-[15px] pt-[37px] pb-[80px] bg-[#5747EA] pl-[32px] ">
            <div className="h-20 w-20 mb-[43px] border-3 border-white rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <img src={jeremyImage} alt="jeremy" height={200} width={200} />
            </div>
            <div className="h-[116px] w-[139px]">
              <p className="text-[15px] mb-[3px] text-[#BBC0FF]">Report for</p>
              <p className="text-[40px] leading-[47px] font-light text-white">
                Jeremy Robson
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 ml-[32px] mt-[26px] text-[18px] text-[#7078C9]  bg-[#1C204B] select-none">
            <button
              className={`${selected === "Daily" ? "text-white" : ""} cursor-pointer`}
              onClick={() => handleButtonClick("Daily")}
            >
              Daily
            </button>
            <button
              className={`${selected === "Weekly" ? "text-white" : ""} cursor-pointer`}
              onClick={() => handleButtonClick("Weekly")}
            >
              Weekly
            </button>
            <button
              className={`${selected === "Monthly" ? "text-white" : ""} cursor-pointer`}
              onClick={() => handleButtonClick("Monthly")}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

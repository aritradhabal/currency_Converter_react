import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-dvw h-dvh bg-amber-200">
        <div className="w-full h-full flex flex-wrap justify-center items-center">
          <div className="relative duration-700 hover:shadow-amber-500 hover:shadow-2xl border-2 border-yellow-500 hover:duration-300 bg-orange-100 rounded-3xl md:w-2/4 md:h-2/5 w-5/6 h-4/12">
            <div className="cards flex flex-wrap w-full h-full flex-col justify-center gap-2 items-center">
              <div className="relative w-3/4 md:w-2/4 md:h-1/5 h-2/10">
                <div className="h-full w-full">
                  <input
                    className="border border-black rounded-xl outline-none w-full h-full px-2 pt-2"
                    min="0"
                    name="first"
                    type="number"
                    value="999"
                  />
                  <div className="w-fit h-fit absolute top-0 left-0 md:text-sm text-xs text-center text-gray-900 pl-2.5 pt-1">
                    <p>From</p>
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 right-0 flex flex-wrap justify-center md:justify-evenly items-center flex-col md:px-6 md:py-2.5 px-2.5 md:text-sm text-xs">
                  <div>
                    <label for="curr-1">Currency Type</label>
                  </div>
                  <div>
                    <select
                      className="px-2 bg-amber-300 rounded-sm hover:cursor-pointer outline-none"
                      id="curr-1"
                      name="curr-1"
                    >
                      <option value="apple">USD</option>
                      <option value="apple">INR</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="z-1 -m-4">
                <button className="text-white bg-amber-800 text-sm py-1 hover:cursor-pointer px-2 rounded-full border border-black">
                  SWAP
                </button>
              </div>

              <div className="relative w-3/4 md:w-2/4 md:h-1/5 h-2/10">
                <div className="h-full w-full">
                  <input
                    className="border border-black rounded-xl outline-none w-full h-full px-2 pt-2"
                    min="0"
                    name="second"
                    type="number"
                    value="79920"
                  />
                  <div className="w-fit h-fit absolute top-0 left-0 md:text-sm text-xs text-center text-gray-900 pl-2.5 pt-1">
                    <p>To</p>
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 right-0 flex flex-wrap justify-center md:justify-evenly items-center flex-col md:px-6 md:py-2.5 px-2.5 md:text-sm text-xs">
                  <div>
                    <label for="curr-1">Currency Type</label>
                  </div>
                  <div>
                    <select
                      className="px-2 bg-amber-300 rounded-sm hover:cursor-pointer outline-none"
                      id="curr-1"
                      name="curr-1"
                    >
                      <option value="apple">INR</option>
                      <option value="apple">USD</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:w-1/3 md:h-1/7 md:px-2 w-4xs px-5 h-1/7 rounded-2xl hover:shadow-amber-700 shadow text-stone-950 bg-yellow-400 duration-200 hover:scale-95">
                <button className=" hover:cursor-pointer w-full h-full">
                  Convert USD To INR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

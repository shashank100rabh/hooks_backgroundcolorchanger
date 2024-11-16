import { useState } from "react";

function App() {
  const [Color, setColor] = useState("white");

  return (
    <div
      className=" w-full h-screen duration- "
      style={{ backgroundColor: Color }}
    >
      <div className="fixed flex flex-wrap  justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"></div>

        <button
          onClick={() => setColor("red")}
          //callback return krr raha h normal se parameter issue hai
          className="outline-none px-4 py-1  rounded-full  text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          {" "}
          red
        </button>

        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1  rounded-full  text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          {" "}
          green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1  rounded-full  text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          {" "}
          blue
        </button>

        <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1  rounded-full  text-white shadow-lg"
          style={{ backgroundColor: "black" }}
        >
          {" "}
          black
        </button>
      </div>
    </div>
  );
}

export default App;

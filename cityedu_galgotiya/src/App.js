import "./App.css";

function App() {
  return (
    <>
      <div className=" mx-auto grid  md:grid-cols-12 ">
        <div className="bg-gray-500 p-4 md:col-span-5  ">Column 1 (8 cols)</div>
        <div className="bg-red-300 p-4  md:col-span-5  ">Column 2 (3 cols)</div>
      </div>
    </>
  );
}

export default App;

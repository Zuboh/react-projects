import  Home  from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import List from "./pages/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />}/>
      </Routes>
    </>
  );
}

export default App;

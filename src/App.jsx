import { Route, Routes } from "react-router-dom";
import LaunchList from "./components/LaunchList";
import LaunchDetails from "./components/LaunchDetails";
import RocketDetails from "./components/RocketDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rocket/:rockedId" element={<RocketDetails />} />
      </Routes>
    </>
  );
}

export default App

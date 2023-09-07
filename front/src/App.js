

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/List/List";
import Single from "./pages/single/Single";

function App() {
  return <div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/> } />
        <Route path="/hotels/:hotel" element={<Single />} />
      </Routes>
    </BrowserRouter>

  </div>;
}

export default App;

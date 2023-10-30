import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./layouts/Topbar";
import Footer from "./layouts/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

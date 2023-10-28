import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import  Topbar  from "./layouts/Topbar";
import YeniHaberMenu from "./layouts/YeniHaberMenu";
import Footer from "./layouts/Footer";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Topbar/>
    <YeniHaberMenu/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />   {/* Fixed typo */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignIn />} />         {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;

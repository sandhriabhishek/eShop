import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import "./App.css";
// import Home from "./Home";
// import Checkout from "./Checkout";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import Login from "./Login";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />

//         <Routes>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/" element={<Home />} />
//           <Route path="/Checkout" element={<Checkout />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

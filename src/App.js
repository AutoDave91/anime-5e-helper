import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate 
} from 'react-router-dom';

import './App.css';

// Pages
import Home from "./pages/Home";
import CharacterBuild from "./pages/CharacterBuild";

// Components
import Navbar from "./components/Navbar";

// Contexts

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/build-character"
              element={<CharacterBuild />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { NavigationStyle } from "./Style/Components/NavigationStyle";

function App() {
  return (
    <BrowserRouter>
      <NavigationStyle.Container>
        <NavLink to="/">
          <NavigationStyle.Link>Home</NavigationStyle.Link>
        </NavLink>
        <NavLink to="/about">
          <NavigationStyle.Link>About</NavigationStyle.Link>
        </NavLink>
      </NavigationStyle.Container>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

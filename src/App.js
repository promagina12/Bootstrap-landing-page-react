import logo from "./logo.svg";
import "./App.scss";

import MainNavbar from "./pages/Navbar/Navbar";
import Work from "./pages/Work/Work";
import Features from "./pages/Features/Features";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contacts/Contact";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Work />
      <Features />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;

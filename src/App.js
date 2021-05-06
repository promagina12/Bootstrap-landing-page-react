import logo from './logo.svg';
import './App.scss';

import Navbar from "./pages/Navbar/Navbar"
import Work from "./pages/Work/Work"
import Features from "./pages/Features/Features"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Work />
      <Features />

    </div>
  );
}

export default App;

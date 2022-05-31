import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Portfolio from "./component/Portfolio/Portfolio";
import Footer from "./component/Footer/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("theme");

  return (
    <div className={`App ${theme === "theme" ? "" : "bg-purple"}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

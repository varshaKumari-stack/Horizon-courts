import React from "react";
import Nav from "./Component/Nav.jsx";
import Header from "./Component/Header.jsx";
import About from "./Component/About.jsx";
import Coach from "./Component/Coach.jsx";
import Media from "./Component/Media.jsx";
import Para from "./Component/Para.jsx";
import Services from "./Component/Services.jsx";
const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Coach />
      <Para />
      <Media />
      <Services />
    </div>
  );
};

export default App;

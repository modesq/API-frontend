import React from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Main from "./components/main.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}


export default App;
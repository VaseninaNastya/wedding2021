
import "./App.css";
import TextBlock from "./components/TextBlock/TextBlock.js"
import MyForm  from './components/MyForm/MyForm.js'

import React from "react";





class App extends React.PureComponent {



  constructor() {
    super();
    window.addEventListener("scroll", this.scrollHandler.bind(this));
  }
  state = {
    scrollPosition: 0,
  };
  scrollHandler() {
    this.setState({ scrollPosition: Math.floor(window.scrollY) });
  }
  render() {

    return (
      <div           className={
        this.state.scrollPosition >=
        document.documentElement.clientHeight *2.5 * document.documentElement.clientHeight/ document.documentElement.clientWidth
          ? "App_2part"
          : "App"
      }>
        <TextBlock/>
        <MyForm/>
      </div>
    );
  }

}

export default App;

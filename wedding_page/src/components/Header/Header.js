import React from "react";
import s from "./Header.module.css";

class Header extends React.PureComponent {
  state = {
    scrollStart: false,
  };
  scrollStart(){
    this.setState({
      scrollStart: true,
    })
  }
  render() {
    const { scrollPosition } = this.props;
    console.log("crollPosition", scrollPosition);
    return (
        <div className={scrollPosition > document.documentElement.clientHeight/200 ? "header__active header" : "header" }>
          <h1 className={scrollPosition > document.documentElement.clientHeight/200 ? "h1__active h1" : "h1" }>
            Привет! Это Коля и Настя, и мы приглашаем тебя на нашу свадьбу!
          </h1>
          <ul className={scrollPosition > document.documentElement.clientHeight/100 ? "main_info__active main_info" : "main_info" }>
            <li>
            Дата: 25.07.2021
            </li>
            <li>
            Место: Пикник-парк “Лесок”
            </li>
            <li>
            Начало: 14.00
            </li>
          </ul>
        </div>
    );
  }
}

export default Header;

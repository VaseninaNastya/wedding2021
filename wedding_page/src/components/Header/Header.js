import React from "react";
import s from "./Header.module.css";

class Header extends React.PureComponent {
  state = {
    scrollStart: false,
  };
  scrollStart() {
    this.setState({
      scrollStart: true,
    });
  }

  render() {
    const { scrollPosition } = this.props;
    return (
      <div
        className={
          scrollPosition * 7 > document.documentElement.clientHeight
            ? "header__active header container"
            : "header container"
        }
      >
        <div
          className={
            scrollPosition * 7 > document.documentElement.clientHeight
              ? "h1__active h1"
              : "h1"
          }
        >
          <div className="header_cloud">
            <h1>
              Привет! Это Коля и Настя, и мы приглашаем тебя на нашу свадьбу!
            </h1>
          </div>
        </div>
        <div          className={
            scrollPosition * 15 > document.documentElement.clientHeight
              ? "main_info_container__active"
              : "main_info_container"
          }>
                  <ul
          className={
            scrollPosition * 15 > document.documentElement.clientHeight
              ? "main_info__active main_info"
              : "main_info"
          }
        >
          <li>Дата: 25.07.2021</li>
          <li>Место: Пикник-парк “Лесок”</li>
          <li>Начало: 14.00</li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Header;

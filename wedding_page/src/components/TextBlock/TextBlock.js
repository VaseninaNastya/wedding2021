import React from "react";
import s from "./TextBlock.module.css";
import Header from "./../Header/Header.js";
class TextBlock extends React.PureComponent {
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
      <>
        <Header scrollPosition={this.state.scrollPosition} />
        <div className={s.mainInfo}>
          <div
            className={
              this.state.scrollPosition >
                document.documentElement.clientHeight &&
              this.state.scrollPosition <=
                document.documentElement.clientHeight * 0.95
                ? "infoForBikers_container__active"
                : this.state.scrollPosition >
                    document.documentElement.clientHeight * 0.95 &&
                  this.state.scrollPosition <=
                    document.documentElement.clientHeight * 2.5
                ? "infoForBikers_container__active__fixed"
                : this.state.scrollPosition >=
                  document.documentElement.clientHeight * 2.5
                ? "infoForBikers_container__active__fixed_after"
                : "infoForBikers_container"
            }
          >
            <div className="infoForBikers_titles">
              <h2>Сейчас расскажем, как всё будет происходить.</h2>
              <h3>
                Утром мы вдвоем заглянем в ЗАГС, а потом должен начаться
                праздник!
              </h3>
              <span>
                После ЗАГСа мы поедем на Финляндский вокзал, откуда поедем на
                станцию "Грузино". Время отправления электрички - 11.58.
              </span>
            </div>

            <div className={s.infoForBikers_picture_container}>
              <div className="trees_front"></div>
              <div className="trees_back"></div>
              <div
                style={
                  this.state.scrollPosition >=
                    document.documentElement.clientHeight &&
                  this.state.scrollPosition <=
                    document.documentElement.clientHeight * 2.5
                    ? {
                        marginLeft:
                          (this.state.scrollPosition *
                            this.state.scrollPosition * (document.documentElement.clientHeight/document.documentElement.clientWidth)) /
                            400 -
                          2300*(document.documentElement.clientHeight/document.documentElement.clientWidth) +
                          "px",
                      }
                    : this.state.scrollPosition >=
                      document.documentElement.clientHeight * 2.8
                    ? { marginLeft: 1200 + "px" }
                    : { marginLeft: -1000 + "px" }
                }
                className={
                  this.state.scrollPosition * 1.8 >=
                  document.documentElement.clientHeight
                    ? "picture_bike__active picture_bike"
                    : "picture_bike"
                }
              ></div>
            </div>

            <p className={s.infoForBikers_text}>
              <span className="infoForBikers_text_title">
                Если ты планируешь добраться до места вместе с нами (на
                электричке):
              </span>
              <p>
                ждем тебя на Финляндском вокзале, в 11.30. Велосипеды
                приветствуются! <br />
                Мы очень надеемся, что погода не подведет, и получится
                прокатиться на велике от станции до места праздника - примерно 8
                км. Дорога красивая и ровная, траффик спокойный. <br />
                Если не хочется кататься на велосипеде - у станции можно взять
                такси, либо заказать его в электричке. Телефоны таксистов: 
                <a href="tel:8-921-928-72-30">8-921-928-72-30</a> или <a href="tel:8-911-252-88-20">8-911-252-88-20</a>. Тем, кто планирует ехать на
                электричке, предлагаем подписаться на &nbsp;
                <a target="_blank" href="https://t.me/Finl_Lesok">
                  {" "}
                  канал в телеграмм{" "}
                </a>
                &nbsp;- там будет вся актуальная информация и координация.
              </p>
            </p>
          </div>
          <div
            className={
              this.state.scrollPosition <
              document.documentElement.clientHeight * 2.4
                ? "infoForCarRiders_container__fixed"
                : this.state.scrollPosition >=
                document.documentElement.clientHeight * 2.4 && this.state.scrollPosition >=
                  document.documentElement.clientHeight * 3.45
                ? "infoForCarRiders_container__active__bright"
                : "infoForCarRiders_container__active"
            }
          >
            <div className="infoForCarRiders_textBlock">
              <div className={s.infoForCarRiders}>
                <strong>Если ты планирушь ехать на машине:</strong>
                <br />
                <a target="_blank" href="https://yandex.ru/maps/-/CCU4Q4TClC">
                  "Пикник-парк "Лесок" в Яндекс.Картах
                </a>
                , сюда тебе нужно приехать в день праздника к 14.00. После
                поворота на грунтовую дорогу нужно доехать до указателя c
                названием глемпинга, оставить машину и чуть-чуть (200 метров)
                пройтись до беседки Ротонда. <br />
                Там-то мы и проведем этот день, вместе.
              </div>
              <div className={s.plans}>
                Дальшейший план действий: С 14 до 20 - праздник!
                <br />
                Ужин, развлечения, танцы, будем гулять по лесу и тусить.
              </div>
            </div>
            <div
              className={
                this.state.scrollPosition <
                document.documentElement.clientHeight * 3.2
                  ? "lesok_picture_container__white"
                  : "lesok_picture_container__black"
              }
            ></div>
          </div>

          <div
            className={
              this.state.scrollPosition >
              document.documentElement.clientHeight * 3.9
                ? "talents_container__active talents_container"
                : "talents_container"
            }
          >
            <div className={s.talentsAndAfterParty_text}>
              <p className={s.talents}>
                <div className={s.talents_title}>Важное объявление!</div>
                <div>
                  Мы знаем, все наши друзья талантливы, а некоторые даже готовы
                  показывать свои таланты публично. Таких гостей мы приветствуем
                  особенно! Если ты хочешь исполнить песню, танец, сыграть на
                  музыкальном инструменте, рассказать стихотворение, как-то
                  особенно нас поздравить - отлично! Обязательно напиши о своих
                  планах и идеях Коле или Насте, или в анкете ниже, мы будем
                  очень рады.
                </div>
              </p>
              <p
                className={
                  this.state.scrollPosition >
                  document.documentElement.clientHeight * 4.1
                    ? "afterparty__active afterparty"
                    : "afterparty"
                }
              >
                <div className={s.talents_title}>
                  В 20.00 официальная часть празника закончится, <br /> но ты
                  можешь выбрать:
                </div>
                <ul>
                  <li>
                    &#9829; Довольный и нарядный, ты едешь в Питер, вспоминать
                    лес и возвращаться к впечатлениям дня во сне. Последние
                    электрички со станции Грузино - в 21.30 и 22.24.
                  </li>
                  <li>
                    &#9829; Так же довольный и нарядный, ты остаешься с нами на
                    афтепати, ночевать в глемпинге. Вечеринка продолжается! Если
                    ты хочешь и можешь остаться - напиши об этом в анкете
                    ниже, или Насте/Коле лично.
                  </li>
                </ul>
              </p>
              <div className = "main_info_container2">
                <h3> И еще разок, самое главное: </h3>
              <ul className="main_info_2">
                <li>Дата: 25.07.2021 (воскресенье)</li>
                <li>Место: <a target="_blank" href="https://yandex.ru/maps/-/CCU4Q4TClC">Пикник-парк “Лесок”</a></li>
                <li>Начало: 14.00</li>
              </ul>
              <h3> Ждем вас, друзья!</h3>
              <div className = "ps">
P.s.: Пролистни ниже, там анкета участника. Будем благодарны заполнившим =)
</div>
              </div>
            </div>
            <div className={s.talents_picture}></div>
          </div>
        </div>
      </>
    );
  }
}

export default TextBlock;

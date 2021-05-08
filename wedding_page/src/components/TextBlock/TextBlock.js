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
        <div
          className={
            this.state.scrollPosition * 7 >=
            document.documentElement.clientHeight
              ? "picture_container__active picture_container c-animated-background"
              : "picture_container c-animated-background"
          }
        >
          <div
                style={
                  this.state.scrollPosition >=
                  document.documentElement.clientHeight*0.9 
                    ? {
                        marginLeft:
                          this.state.scrollPosition + "px",   marginTop: 0,   marginRight: 200 + 'px'
                      }
                    : {
                      marginTop:
                      this.state.scrollPosition + "px",   marginLeft: 0,   marginRight:    this.state.scrollPosition + "px",   

                    }
                }
            className={
              this.state.scrollPosition >=
              document.documentElement.clientHeight*0.9
                ? "picture__active picture"
                : "picture"
            }
          >
          </div>
        </div>
        <div className={s.mainInfo}>
          <div
            className={
              this.state.scrollPosition >
                document.documentElement.clientHeight &&
              this.state.scrollPosition <=
                document.documentElement.clientHeight * 1.8
                ? "infoForBikers_container__active"
                : this.state.scrollPosition >
                    document.documentElement.clientHeight * 1.8 &&
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
                После ЗАГСа мы поедем на Финляднский вокзал, откуда поедем на
                станцию "Грузино". Время отправления электрички - 11.58.
              </span>
            </div>

            <div className={s.infoForBikers_picture_container}>
              <div
                style={
                  this.state.scrollPosition >=
                    document.documentElement.clientHeight * 1.4 &&
                  this.state.scrollPosition <=
                    document.documentElement.clientHeight * 2.8
                    ? {
                        marginLeft:
                          (this.state.scrollPosition *
                            this.state.scrollPosition) /
                            2800 -
                          1000 +
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
              >

              </div>
            </div>

            <p className={s.infoForBikers_text}>
              <span className="infoForBikers_text_title">
                Если ты планируешь добраться до места вместе с нами (на
                электричке):
              </span>
              <p>
                <br />
                ждем тебя на Финляндском вокзале, в 11.30. Велосипеды
                приветствуются! <br />
                Мы очень надеемся, что погода не подведет, и получится
                прокатиться на велике от станции до места праздника - примерно 8
                км. Дорога красивая и ровная, траффик спокойный. <br />
                Если не хочется кататься на велосипеде - у станции можно взять
                такси, либо заказать его в электричке. Телефоны таксистов:
                8-921-928-72-30 или 8-911-252-88-20. Тем, кто планирует ехать на
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
              document.documentElement.clientHeight * 2.5
                ? "infoForCarRiders_container__fixed"
                : this.state.scrollPosition >
                  document.documentElement.clientHeight * 3.5
                ? "infoForCarRiders_container__active__bright"
                : "infoForCarRiders_container__active"
            }
          >
            <div className="infoForCarRiders_textBlock">
              <div className={s.infoForCarRiders}>
                <strong>Если ты планирушь ехать на машине:</strong>
                <br />
                <a target="_blank" href="https://yandex.ru/maps/-/CCU4Q4TClC">
                  ссылка на точку gps
                </a>
                , куда тебе нужно приехать в день праздника к 14.00. После
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
              document.documentElement.clientHeight * 4
                ? "talents_container__active talents_container"
                : "talents_container"
            }
          >
            <div className={s.talentsAndAfterParty_text}>
              <p className={s.talents}>
                <div className={s.talents_title}>Важное объявление!</div>
                <div>
                  Мы знаем, все наши друзья талантливы, а некоторые даже готовы
                  показывать свои таланты публично. Таких гостей мы приветсвуем
                  особенно! Если ты хочешь исполнить песню, танец, сыграть на
                  музыкальном инструменте, рассказать стихотворение, как-то
                  особенно нас поздравить - отлично! Напиши о своих планах Коле
                  или Насте, или в анкете ниже, мы будем очень рады.
                </div>
              </p>
              <p
                className={
                  this.state.scrollPosition >
                  document.documentElement.clientHeight * 4.4
                    ? "afterparty__active afterparty"
                    : "afterparty"
                }
              >
                <div className={s.talents_title}>
                В 20.00 официальная часть празника закончится, <br/> но вы можете
                выбрать:
                </div>
                <ul>
                  <li>
                  &#9829; Довольные и нарядные, вы едете в Питер, вспоминать лес и
                    возвращаться к впечатлениям дня во сне. Последние электрички
                    со станции Грузино - в 21.30 и 22.24.
                  </li>
                  <li>
                  &#9829; Так же довольные и нарядные, вы остаетесь с нами на
                    афтепати, ночевать в глемпинге. Вечеринка продолжается! Если
                    вы хотите и можете остаться - напишите об этом в анкете
                    ниже, или Насте/Коле лично.
                  </li>
                </ul>
              </p>
            </div>
            <div className={s.talents_picture}></div>
          </div>
        </div>
      </>
    );
  }
}

export default TextBlock;

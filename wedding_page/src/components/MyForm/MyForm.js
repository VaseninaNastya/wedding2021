import React from "react";
import s from "./MyForm.module.css";
import MyFormRadioItem from "../../components/MyFormRadioItem/MyFormRadioItem.js";
import MyFormInputItem from "../../components/MyFormInputItem/MyFormInputItem.js";
import MyFormTextareaItem from "../../components/MyFormTextareaItem/MyFormTextareaItem.js";

import MyFormRadioItemList from "../../utils/MyFormRadioItemList.utils.js";
import MyFormInputItemList from "../../utils/MyFormInputItemList.utils.js";
import MyFormTextareaItemList from "../../utils/MyFormTextareaItemList.utils.js";

import GoogleFormAPI from "../../utils/GoogleFormAPI.js";

class MyForm extends React.PureComponent {
  constructor() {
    super();
  }
  state = {
    formSended: false,
  };
  async handlerSendForm() {
    let api = new GoogleFormAPI();
    let resName =
      document.querySelector("[style='order: 1;'] input").getAttribute("name") +
      "=" +
      document.querySelector("[style='order: 1;'] input").value;
    let resAgree = document.querySelector("[style='order: 2;'] input:checked")
      ? document
          .querySelector("[style='order: 2;'] input")
          .getAttribute("name") +
        "=" +
        document.querySelector("[style='order: 2;'] input").value
      : "";
    let resChild = document.querySelector("[style='order: 3;'] input:checked")
      ? document
          .querySelector("[style='order: 3;'] input")
          .getAttribute("name") +
        "=" +
        document.querySelector("[style='order: 3;'] input").value
      : "";
    let resCar = document.querySelector("[style='order: 4;'] input:checked")
      ? document
          .querySelector("[style='order: 4;'] input")
          .getAttribute("name") +
        "=" +
        document.querySelector("[style='order: 4;'] input").value
      : "";
    let resNoCar = document.querySelector("[style='order: 5;'] input:checked")
      ? document
          .querySelector("[style='order: 5;'] input")
          .getAttribute("name") +
        "=" +
        document.querySelector("[style='order: 5;'] input").value
      : "";
    let resAfterparty = document.querySelector(
      "[style='order: 6;'] input:checked"
    )
      ? document
          .querySelector("[style='order: 6;'] input")
          .getAttribute("name") +
        "=" +
        document.querySelector("[style='order: 6;'] input").value
      : "";
    let resShow = document.querySelector("[style='order: 7;'] input:checked")
      ? document
          .querySelector("[style='order: 7;'] input")
          .getAttribute("name") +
        "=" +
        document.querySelector("[style='order: 7;'] input").value
      : "";
    let resShowShy =
      document
        .querySelector("[style='order: 8;'] textarea")
        .getAttribute("name") +
      "=" +
      document.querySelector("[style='order: 8;'] textarea").value;
    let resSongs =
      document
        .querySelector("[style='order: 9;'] textarea")
        .getAttribute("name") +
      "=" +
      document.querySelector("[style='order: 9;'] textarea").value;
    let str =
      resName +
      "&" +
      resAgree +
      "&" +
      resChild +
      "&" +
      resCar +
      "&" +
      resNoCar +
      "&" +
      resAfterparty +
      "&" +
      resShow +
      "&" +
      resShowShy +
      "&" +
      resSongs;
    let result = await api.sendResult(str);
    console.log("result", result);
    this.setState({
      formSended: true,
    });
  }
  handlerRefresh(){
    document.location.reload()
  }
  render() {
    return (
      <div className={s.form_container}>
        {this.state.formSended ? (
          <>
            <p className = "formSended_text">
              Твои ответы записаны! Если ответ на какой-то из вопросов изменился
              - можешь отправить ответы заново. Будет учтен последний вариант
              ответов. Для того, чтобы заново ответить - обнови страницу или
              нажми на кнопку ниже. Если что-то поменяется меньше чем за две
              недели до мероприятия - лучше напиши лично Коле или Насте.
            </p>
            <button
              onClick={this.handlerRefresh.bind(this)}
              className="submit_button"
              style={{ order: 11 }}
            >
              Изменить ответы
            </button>
          </>
        ) : (
          <>
            {" "}
            <form>
              <h3>Ответь, пожалуйста, на несколько вопросов:</h3>
              {MyFormInputItemList.map((item) => (
                <MyFormInputItem
                  name={item.name}
                  itemLabel={item.label}
                  number={item.number}
                />
              ))}
              {MyFormRadioItemList.map((item) => (
                <MyFormRadioItem
                  name={item.name}
                  itemLabel={item.label}
                  number={item.number}
                />
              ))}
              {MyFormTextareaItemList.map((item) => (
                <MyFormTextareaItem
                  name={item.name}
                  itemLabel={item.label}
                  number={item.number}
                />
              ))}
            </form>
            <button
              onClick={this.handlerSendForm.bind(this)}
              className="submit_button"
              style={{ order: 11 }}
            >
              Отправить
            </button>
          </>
        )}
      </div>
    );
  }
}

export default MyForm;

import React from "react";
import s from "./MyForm.module.css";
import MyFormRadioItem from "../../components/MyFormRadioItem/MyFormRadioItem.js"
import MyFormInputItem  from "../../components/MyFormInputItem/MyFormInputItem.js"
import MyFormTextareaItem  from "../../components/MyFormTextareaItem/MyFormTextareaItem.js"

import MyFormRadioItemList from '../../utils/MyFormRadioItemList.utils.js'
import MyFormInputItemList from '../../utils/MyFormInputItemList.utils.js'
import MyFormTextareaItemList from '../../utils/MyFormTextareaItemList.utils.js'

class MyForm extends React.PureComponent {
  render() {
    return (
      <div className={s.form_container}>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZCRoWLBsYBjhJoA0YrhHkisPG8DKAULeMwGZFmMhJnrVahg/formResponse">
        {MyFormInputItemList.map(item => < MyFormInputItem name = {item.name} itemLabel={item.label} number = {item.number}/>)}
       
        {MyFormRadioItemList.map(item => < MyFormRadioItem name = {item.name} itemLabel={item.label} number = {item.number}/>)}
        {MyFormTextareaItemList.map(item => < MyFormTextareaItem name = {item.name} itemLabel={item.label} number = {item.number}/>)}
          <button className = "submit_button"  style={{order: 11}}>Отправить</button>
        </form>
      </div>
    );
  }
}

export default MyForm;

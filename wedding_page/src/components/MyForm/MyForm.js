import React from "react";
import s from "./MyForm.module.css";
import MyFormRadioItem from "../../components/MyFormRadioItem/MyFormRadioItem.js"
import MyFormInputItem  from "../../components/MyFormInputItem/MyFormInputItem.js"

import MyFormRadioItemList from '../../utils/MyFormRadioItemList.utils.js'
import MyFormInputItemList from '../../utils/MyFormInputItemList.utils.js'

class MyForm extends React.PureComponent {
  render() {
    return (
      <div className={s.form_container}>
        <h3>Ответьте, пожалуйста, на несколько вопросов:</h3>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZCRoWLBsYBjhJoA0YrhHkisPG8DKAULeMwGZFmMhJnrVahg/formResponse">
        {MyFormRadioItemList.map(item => < MyFormRadioItem name = {item.name} itemLabel={item.label}/>)}
        {MyFormInputItemList.map(item => < MyFormInputItem name = {item.name} itemLabel={item.label}/>)}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MyForm;

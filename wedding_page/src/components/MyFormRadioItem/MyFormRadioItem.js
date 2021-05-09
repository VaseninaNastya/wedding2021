import React from "react";
import s from "./MyFormRadioItem.module.css";

class MyFormRadioItem extends React.PureComponent {
  render() {
    const { name, itemLabel, number } = this.props;
    return (
      <div className={s.form_Item_container_radio } name={name} style={{order: number}}>
      <label>
        {itemLabel}
      </label>
      <label>
      &nbsp;<input type="radio" name={name} value="да" />&nbsp;
        Да
      </label>
      <label>
      &nbsp;<input type="radio" name={name} value="нет" />&nbsp;
        Нет
      </label>
    </div>
    );
  }
}

export default MyFormRadioItem;

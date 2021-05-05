import React from "react";
import s from "./MyFormRadioItem.module.css";

class MyFormRadioItem extends React.PureComponent {
  render() {
    const { name, itemLabel } = this.props;
    return (
      <div className={s.form_Item_container } name={name}>
      <label>
        {itemLabel}
      </label>
      <label>
        <input type="radio" name={name} value="да" />
        Да
      </label>
      <label>
        <input type="radio" name={name} value="нет" />
        Нет
      </label>
    </div>
    );
  }
}

export default MyFormRadioItem;

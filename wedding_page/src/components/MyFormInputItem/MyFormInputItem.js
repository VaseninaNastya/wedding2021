import React from "react";
import s from "./MyFormInputItem.module.css";

class MyFormInputItem extends React.PureComponent {
  render() {
    const { name, itemLabel } = this.props;
    return (
      <div className={s.form_Item_container }>
      <label>{itemLabel}<input name={name} /></label>
      </div>
    );
  }
}

export default MyFormInputItem;

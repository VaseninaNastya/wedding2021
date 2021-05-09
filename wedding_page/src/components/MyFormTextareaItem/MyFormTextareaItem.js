import React from "react";
import s from "./MyFormTextareaItem.module.css";

class MyFormTextareaItem extends React.PureComponent {
  render() {
    const { name, itemLabel,number } = this.props;
    return (
      <div className={s.form_Item_container_textarea } style={{order: number}}>
      <label>{itemLabel}&nbsp;<br/><textarea name={name} /></label>
      </div>
    );
  }
}

export default MyFormTextareaItem;

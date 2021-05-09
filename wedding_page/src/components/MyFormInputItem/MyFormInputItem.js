import React from "react";
import s from "./MyFormInputItem.module.css";

class MyFormInputItem extends React.PureComponent {
  render() {
    const { name, itemLabel,number } = this.props;
    return (
      <div className={s.form_Item_container_input } style={{order: number}}>
      <label>{itemLabel}&nbsp;<input name={name} /></label>
      </div>
    );
  }
}

export default MyFormInputItem;

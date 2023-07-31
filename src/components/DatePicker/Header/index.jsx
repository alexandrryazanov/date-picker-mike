import React from "react";
import { addMonths, format } from "date-fns";
import styles from "./styles.module.scss";

const Header = ({ date, onChangeMonth }) => {
  const nextMonth = () => onChangeMonth(addMonths(date, 1));
  const prevMonth = () => onChangeMonth(addMonths(date, -1));

  return (
    <div className={styles.header}>
      <span>{format(date, "MMMM yyyy")}</span>
      <div>
        <button onClick={prevMonth}>{"<"}</button>
        <button onClick={nextMonth}>{">"}</button>
      </div>
    </div>
  );
};

export default Header;

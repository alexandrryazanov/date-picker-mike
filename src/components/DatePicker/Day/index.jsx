import React from "react";
import styles from "./styles.module.scss";
import { format, isToday, isWeekend } from "date-fns";

const Day = ({ date, onClick, isNotSameMonth = false }) => {
  // Чтоб вот так не формировать классы есть удобные либы типа "clsx"
  const className = [
    styles.wrapper,
    isToday(date) && styles.today,
    isNotSameMonth && styles.anotherMonth,
    isWeekend(date) && styles.weekend,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} onClick={() => onClick(date)} role={"button"}>
      {format(date, "d")}
    </div>
  );
};

export default Day;

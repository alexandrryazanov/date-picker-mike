import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { addDays, isSameMonth } from "date-fns";
import Day from "../Day";

const Week = ({ firstWeekDay, visibleMonth, onDayClick }) => {
  // Создаем массив из семи нулей (или любых 7 элементов).
  // Для каждого элемента рисуем компонент Day c date = {1-ый день недели + индекс элемента'}

  useEffect(() => {
    console.log("test");

    return () => {
      console.log("test4");
    };
  }, []);

  return (
    <div className={styles.weekWrapper}>
      {new Array(7).fill(0).map((_, i) => {
        const date = addDays(firstWeekDay, i);
        const isNotSameMonth = !isSameMonth(date, visibleMonth);
        return (
          <Day
            date={date}
            key={firstWeekDay.toDateString() + i}
            onClick={onDayClick}
            isNotSameMonth={isNotSameMonth}
          />
        );
      })}
    </div>
  );
};

export default Week;

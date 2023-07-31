import React, { useState } from "react";
import styles from "./styles.module.scss";
import { eachWeekOfInterval, endOfMonth, startOfMonth } from "date-fns";
import Week from "./Week";
import Header from "./Header";

/*
Задача: составить такой двумерный массив, чтобы потом его отрисовать построчно
[
  [30, 31, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [...],
  [...],
]
 */

const DatePicker = ({
  value = new Date(),
  onChange,
  startWeekWithMonday = false,
}) => {
  const [visibleMonth, setVisibleMonth] = useState(value);
  const firstDaysOfWeeks = eachWeekOfInterval(
    {
      start: startOfMonth(visibleMonth),
      end: endOfMonth(visibleMonth),
    },
    { weekStartsOn: startWeekWithMonday ? 1 : 0 }
  );

  return (
    <div className={styles.wrapper}>
      <Header onChangeMonth={setVisibleMonth} date={visibleMonth} />
      {firstDaysOfWeeks.map((firstWeekDay) => (
        <Week
          key={firstWeekDay.toDateString()}
          firstWeekDay={firstWeekDay}
          visibleMonth={visibleMonth}
          onDayClick={onChange}
        />
      ))}
    </div>
  );
};

export default DatePicker;

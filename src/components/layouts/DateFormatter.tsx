import * as React from "react";
import { parseISO, format } from "date-fns";
import { DateFormatterPropsType } from "@/types";

const DateFormatter: React.FC<DateFormatterPropsType> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMMM do, yyyy')}</time>;
};

export default DateFormatter;

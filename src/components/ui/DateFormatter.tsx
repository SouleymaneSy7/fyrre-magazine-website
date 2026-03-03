import * as React from "react";
import { format } from "date-fns";
import { DateFormatterPropsType } from "@/types";

const DateFormatter: React.FC<DateFormatterPropsType> = ({ dateString }) => {
  return (
    <time dateTime={dateString}>{format(dateString, "MMMM do, yyyy")}</time>
  );
};

export default DateFormatter;

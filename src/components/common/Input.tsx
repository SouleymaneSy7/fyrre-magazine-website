import * as React from "react";
import { InputsPropsType } from "@/types/types";

const Inputs: React.FC<InputsPropsType> = ({
  label,
  id,
  type,
  ...delegatedProps
}) => {
  if (!label) {
    return <input id={id} type={type} {...delegatedProps} />;
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...delegatedProps} />
    </div>
  );
};

export default Inputs;

import * as React from "react";

type InputsProps = {
  id?: string;
  label?: string;
  type: "text" | "email";
} & React.ComponentPropsWithoutRef<"input">;

const Inputs = ({ label, id, type, ...delegatedProps }: InputsProps) => {
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

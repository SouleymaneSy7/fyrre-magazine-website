import * as React from "react";
import { FormPropsType } from "@/types";

const Forms: React.FC<FormPropsType> = ({ children, ...delegatedProps }) => {
  return <form {...delegatedProps}>{children}</form>;
};

export default Forms;

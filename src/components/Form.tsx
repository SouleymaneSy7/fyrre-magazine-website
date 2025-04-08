import * as React from "react";

type FormPropsType = React.ComponentPropsWithoutRef<"form"> & {
  children: React.ReactNode;
};

const Forms = ({ children, ...delegatedProps }: FormPropsType) => {
  return <form {...delegatedProps}>{children}</form>;
};

export default Forms;

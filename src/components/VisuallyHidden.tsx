import * as React from "react";

type VisuallyHiddenPropsType = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"span">;

const VisuallyHidden = ({
  children,
  ...delegatedProps
}: VisuallyHiddenPropsType) => {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = (event: KeyboardEvent): void => {
        if (event.key === "Alt") {
          setForceShow(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <span className="visually-hidden" {...delegatedProps}>
      {children}
    </span>
  );
};

export default VisuallyHidden;

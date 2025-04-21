import * as React from "react";

const useOnDisabledBodyScroll = (isOpen: boolean) => {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
};

export default useOnDisabledBodyScroll;

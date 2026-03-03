"use client";
import * as React from "react";
import clsx from "clsx";
import { MailCheck, MailX, X } from "lucide-react";
import { ToastPropsType } from "@/types";
import VisuallyHidden from "../common/VisuallyHidden";
import Container from "../common/Container";

const Toast: React.FC<ToastPropsType> = ({
  message,
  type,
  onClose,
  duration = 10000,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLeaving, setIsLeaving] = React.useState(false);

  React.useEffect(() => {
    const enterTimer = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
    return () => cancelAnimationFrame(enterTimer);
  }, []);

  const handleClose = React.useCallback(() => {
    setIsLeaving(true);
    const exitTimer = setTimeout(() => {
      onClose();
    }, 400);
    return () => clearTimeout(exitTimer);
  }, [onClose]);

  React.useEffect(() => {
    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [handleClose, duration]);

  const isSuccess = type === "success";

  return (
    <Container
      as="div"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className={clsx(
        "fixed bottom-6 right-6 z-50 max-w-[420px] min-w-[300px]",
        "flex flex-col overflow-hidden",
        isSuccess
          ? "bg-primary-clr text-text-inversed-clr"
          : "bg-destructive-clr text-text-inversed-clr",
        "transition-all duration-400 ease-in-out",
        isVisible && !isLeaving
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <div className="flex items-start gap-3 px-5 py-4">
        <span className="shrink-0 mt-[2px]" aria-hidden="true">
          {isSuccess ? (
            <MailCheck size={18} strokeWidth={1.5} />
          ) : (
            <MailX size={18} strokeWidth={1.5} />
          )}
        </span>

        <div className="flex flex-col gap-[2px] flex-1 min-w-0">
          <span className="text-fs-text-tiny font-semi-bold uppercase tracking-widest leading-text-tiny">
            {isSuccess ? "Success" : "Error"}
          </span>
          <span className="text-fs-text-small font-regular leading-text-small opacity-80 break-words">
            {message}
          </span>
        </div>

        <button
          onClick={handleClose}
          aria-label="Dismiss notification"
          className={clsx(
            "shrink-0 mt-[2px] p-[2px]",
            "opacity-50 hover:opacity-100",
            "transition-opacity duration-200",
            "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            isSuccess
              ? "focus-visible:outline-text-inversed-clr"
              : "focus-visible:outline-white",
          )}
        >
          <X size={16} strokeWidth={1.5} aria-hidden="true" />
          <VisuallyHidden>Dismiss this notification</VisuallyHidden>
        </button>
      </div>

      <div
        className={clsx(
          "h-[2px] w-full",
          isSuccess ? "bg-text-inversed-clr/20" : "bg-white/20",
        )}
        aria-hidden="true"
      >
        <div
          className={clsx(
            "h-full origin-left",
            isSuccess ? "bg-text-inversed-clr/60" : "bg-white/60",
          )}
          style={{
            animation: `toast-progress ${duration}ms linear forwards`,
          }}
        />
      </div>
    </Container>
  );
};

export default Toast;

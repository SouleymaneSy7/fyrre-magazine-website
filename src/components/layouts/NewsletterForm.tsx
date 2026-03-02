"use client";

import * as React from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { emailSchema } from "@/validators";
import {
  NewsletterFormDataType,
  NewsletterFormPropsType,
  NewsletterFormVariantContentType,
  NewsletterFormVariantType,
  ToastStateType,
} from "@/types";

import Toast from "./Toast";
import Form from "../common/Form";
import Button from "../common/Button";
import Inputs from "../common/Input";
import Container from "../common/Container";
import VisuallyHidden from "../common/VisuallyHidden";
import Spinner from "./Spinner";

const variantConfig: Record<
  NewsletterFormVariantType,
  NewsletterFormVariantContentType
> = {
  footer: {
    formClassName: "w-full flex flex-col gap-3 lg:flex-row lg:gap-4",
    inputClassName:
      "form-input | w-full lg:max-w-[360px] bg-default-clr text-text-muted-clr",
    buttonClassName: "bg-default-clr text-primary-clr",
    spinnerVariant: "default",
  },
  sidebar: {
    formClassName: "flex flex-col gap-2",
    inputClassName:
      "form-input | border-none bg-default-clr text-text-muted-clr",
    buttonClassName: undefined,
    spinnerVariant: "inversed",
  },
};

const NewsletterForm: React.FC<NewsletterFormPropsType> = ({
  variant = "footer",
}) => {
  const [toast, setToast] = React.useState<ToastStateType | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const config = variantConfig[variant];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormDataType>({
    resolver: zodResolver(emailSchema),
  });

  const closeToast = React.useCallback(() => setToast(null), []);

  const onSubmit = async (data: NewsletterFormDataType) => {
    setIsLoading(true);
    try {
      const responce = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await responce.json();

      if (!responce.ok) {
        setToast({
          message: json.error ?? "Something went wrong. Please try again.",
          type: "error",
        });
        return;
      }

      setToast({
        message: json.message,
        type: "success",
      });
      reset();
    } catch {
      setToast({
        message: "Unable to reach the server. Please try again later.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formContent = (
    <React.Fragment>
      <Form
        noValidate={true}
        onSubmit={handleSubmit(onSubmit)}
        className={config.formClassName}
      >
        <Inputs
          {...register("email")}
          name="email"
          type="email"
          placeholder="Email"
          disabled={isLoading}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={clsx(
            config.inputClassName,
            errors.email ? "border-destructive-clr border" : "",
          )}
        />
        <Button
          type="submit"
          variant="default"
          disabled={isLoading}
          className={clsx(
            config.buttonClassName,
            isLoading ? "opacity-60 cursor-not-allowed" : "",
          )}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner
                size="sm"
                variant={config.spinnerVariant}
                label="Submitting form..."
              />
              Loading
            </span>
          ) : (
            "Sign Up"
          )}
        </Button>
      </Form>

      {errors.email && (
        <React.Fragment>
          <span
            id="email-error"
            role="alert"
            className="text-destructive-clr text-fs-text-tiny font-semi-bold tracking-wide"
          >
            {errors.email.message}
          </span>
          <VisuallyHidden>
            Email validation error: {errors.email.message}
          </VisuallyHidden>
        </React.Fragment>
      )}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {variant === "footer" ? (
        <Container
          as="div"
          className="flex flex-col gap-1 w-full lg:max-w-[480px]"
        >
          {formContent}
        </Container>
      ) : (
        <div className="flex flex-col gap-1 w-full">{formContent}</div>
      )}

      {toast && (
        <React.Fragment>
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={closeToast}
          />
          <VisuallyHidden>
            {toast.type === "success"
              ? "Success: You have successfully subscribed to the Fyrre Magazine newsletter."
              : "Error: Newsletter subscription failed. Please try again."}
          </VisuallyHidden>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default NewsletterForm;

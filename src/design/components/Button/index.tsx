import React from "react";
import { ButtonVariant, Sizes } from "../../types";
import s from "./Button.module.scss";

const Button = ({
  size,
  label,
  variant,
  fullWidth = false,
  ...pwd
}: {
  size: Sizes;
  variant: ButtonVariant;
  fullWidth?: boolean;
  label: string;
}) => {
  let sizeClass;
  let variantClass;
  let widthClass = fullWidth ? s.fullWidth : "";
  switch (size) {
    case Sizes.sm:
      sizeClass = s.btnSm;
      break;
    case Sizes.md:
      sizeClass = s.btnMd;
      break;
    case Sizes.lg:
      sizeClass = s.btnLg;
      break;
    case Sizes.xl:
      sizeClass = s.btnXl;
      break;
    default:
      sizeClass = s.btnMd;
  }
  switch (variant) {
    case ButtonVariant.primary:
      variantClass = s.btnPrimary;
      break;
    case ButtonVariant.secondary:
      variantClass = s.btnSecondary;
      break;
    case ButtonVariant.success:
      variantClass = s.btnSuccess;
      break;
    case ButtonVariant.warning:
      variantClass = s.btnWarning;
      break;
    case ButtonVariant.danger:
      variantClass = s.btnDanger;
      break;
    case ButtonVariant.info:
      variantClass = s.btnInfo;
      break;
    case ButtonVariant.light:
      variantClass = s.btnLight;
      break;
    case ButtonVariant.dark:
      variantClass = s.btnDark;
      break;
    case ButtonVariant.link:
      variantClass = s.btnLink;
      break;
    case ButtonVariant.ghost:
      variantClass = s.btnGhost;
      break;
    case ButtonVariant.outline:
      variantClass = s.btnOutline;
      break;
    case ButtonVariant.text:
      variantClass = s.btnText;
      break;
    default:
      variantClass = s.btnPrimary;
  }
  return (
    <button
      className={`${s.baseButton} ${sizeClass} ${variantClass} ${widthClass}`}
      {...pwd}
    >
      {label}
    </button>
  );
};

export default Button;

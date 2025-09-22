import { JSX } from "react";

export enum Sizes {
  sm = "small",
  md = "medim",
  lg = "large",
  xl = "extralarge",
}
export type ButtonPropType = {
  label: string | JSX.Element;
  onClick: () => void;
  size?: Sizes;
  fullWidth?: boolean;
  variant?: ButtonVariant;
};

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
  success = "success",
  warning = "warning",
  info = "info",
  light = "light",
  dark = "dark",
  link = "link",
  ghost = "ghost",
  outline = "outline",
  text = "text",
}

export enum BadgeVariant {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  info = "info",
  light = "light",
  dark = "dark",
  danger = "danger",
}

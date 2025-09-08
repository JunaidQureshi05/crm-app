import { ButtonPropType, ButtonSize, ButtonVariant } from "../../types";
import s from "./Button.module.scss";

const Button = ({
  label,
  variant = ButtonVariant.primary,
  onClick,
  size = ButtonSize.md,
  fullWidth = false,
}: ButtonPropType) => {
  let sizeClass = "";
  let variantClass = "";
  switch (size) {
    case ButtonSize.sm:
      sizeClass = s.buttonSm;
      break;
    case ButtonSize.md:
      sizeClass = s.buttonMd;
      break;
    case ButtonSize.lg:
      sizeClass = s.buttonLg;
      break;
    case ButtonSize.xl:
      sizeClass = s.buttonXl;
      break;
    default:
      sizeClass = s.buttonMd;
  }
  switch (variant) {
    case ButtonVariant.primary:
      variantClass = s.primary;
      break;
    case ButtonVariant.secondary:
      variantClass = s.secondary;
      break;
    case ButtonVariant.info:
      variantClass = s.info;
      break;
    default:
      variantClass = s.primary;
  }

  return (
    <button
      onClick={onClick}
      className={[
        s.baseButton,
        sizeClass,
        variantClass,
        fullWidth && s.fullWidth,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </button>
  );
};

export default Button;

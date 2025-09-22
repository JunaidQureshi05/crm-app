import React from "react";
import s from "./Badge.module.scss";
import { Sizes, BadgeVariant } from "../../types";

const Badge = ({
  size = Sizes.md,
  variant = BadgeVariant.primary,
  label,
  ...props
}: {
  size?: Sizes;
  variant?: BadgeVariant;
  label: string;
}) => {
  let sizeClass = s.badgeMd;
  let variantClass = s.badgePrimary;

  switch (size) {
    case Sizes.sm:
      sizeClass = s.badgeSm;
      break;
    case Sizes.md:
      sizeClass = s.badgeMd;
      break;
    case Sizes.lg:
      sizeClass = s.badgeLg;
      break;
    default:
      sizeClass = s.badgeMd;
  }

  switch (variant) {
    case BadgeVariant.primary:
      variantClass = s.badgePrimary;
      break;
    case BadgeVariant.secondary:
      variantClass = s.badgeSecondary;
      break;
    case BadgeVariant.info:
      variantClass = s.badgeInfo;
      break;
    case BadgeVariant.success:
      variantClass = s.badgeSuccess;
      break;
    case BadgeVariant.warning:
      variantClass = s.badgeWarning;
      break;
    case BadgeVariant.danger:
      variantClass = s.badgeDanger;
      break;
    default:
      variantClass = s.badgePrimary;
  }

  return (
    <span className={`${s.baseBadge} ${sizeClass} ${variantClass}`} {...props}>
      {label}
    </span>
  );
};

export default Badge;

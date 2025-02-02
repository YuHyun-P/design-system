import { ReactNode } from "react";

import classnames from "../../utils/classnames";
import { objectKeys } from "../../utils/types";

import { badgeVariants } from "./Badge.css";
import * as styles from "./Badge.css";

export type BadgeVariantType = keyof typeof badgeVariants;

export interface BadgeProps {
  variant: BadgeVariantType;
  children: ReactNode;
}

export const badgeVariantList = objectKeys(badgeVariants);

export function Badge({ variant, children }: BadgeProps) {
  const badgeStyle = classnames(
    styles.badgeBase,
    styles.badgeVariants[variant],
  );
  return <span className={badgeStyle}>{children}</span>;
}

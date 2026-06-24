import { ReactNode } from "react";
import { Box } from "./Box";

import styles from "./MenuItem.module.css";

interface Props {
  icon: ReactNode;
  active: boolean;
  label: string;
}

export function MenuItem({ icon, active, label }: Props) {
  return (
    <Box className={styles.MenuItem} active={active} centered smallPadding>
      {icon}
      <div className={styles.label}>{label}</div>
    </Box>
  );
}

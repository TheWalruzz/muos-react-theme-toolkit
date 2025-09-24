import { ReactNode } from "react";
import { Box } from "./Box";

interface Props {
  icon: ReactNode;
  active: boolean;
  label: string;
}

export function MenuItem({ icon, active, label }: Props) {
  return (
    <Box active={active} centered>
      {icon}
      <div>{label}</div>
    </Box>
  );
}

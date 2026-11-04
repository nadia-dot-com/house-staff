import classes from "@/components/PageContainer/PageContainer.module.scss";
import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className={classes.pageContainer}>{children}</div>;
}

import { PresentationProps } from "@/types/presentation";
import { cn } from "@/utils/cn";
import { Button } from "@/components/Button/Button";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";
import { getImagePath } from "@/utils/getImagePath";
import { PRESENTATION } from "@/data/presentation";
import { motion } from "motion/react";
import classes from "./PresentationItem.module.css";

export function PresentationItem({
  item,
}: {
  item: PresentationProps;
}) {
  const { navigateToCategory } = useShoppingNavigation();

  return (
    <motion.div
      className={classes.slide}
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <motion.img
        src={getImagePath(item.img)}
        alt={item.title}
        className={cn(classes.image)}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4 }}
        width="1760"
        height="600"
        fetchPriority="high"
      />
      <div
        className={cn(
          classes.content,
          item === PRESENTATION[0] && classes.contentColor1,
        )}
      >
        <h1 className={classes.title}>{item.title}</h1>
        <p className={classes.desc}>{item.desc}</p>
        <Button
          bgColor="white"
          textColor="black"
          onClick={() => navigateToCategory(item.category)}
          text={"• SHOP NOW"}
        />
      </div>
    </motion.div>
  );
}

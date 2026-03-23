import { Collection } from "./Collection/Collection";
import { PopularCategories } from "./PopularCategories/PopularCategories";
import { Presentation } from "./Presentation/Presentation";
import { Sale } from "./Sale/Sale";
import { OurShowroom } from "./OurShowroom/OurShowroom";
import classes from "./MainPage.module.css";
import { PageTransition } from "@/components/PageTransition/PageTransition";

export function MainPage() {
  return (
    <div className={classes.mainPageContainer}>
      <Presentation />
      <PageTransition>
        <PopularCategories />
        <Collection />
        <Sale />
        <OurShowroom />
      </PageTransition>
    </div>
  );
}

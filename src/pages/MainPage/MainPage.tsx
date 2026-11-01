import classes from "@/pages/MainPage/MainPage.module.scss";
import { Collection } from "@/pages/MainPage/Collection/Collection";
import { PopularCategories } from "@/pages/MainPage/PopularCategories/PopularCategories";
import { Presentation } from "@/pages/MainPage/Presentation/Presentation";
import { Sale } from "@/pages/MainPage/Sale/Sale";
import { OurShowroom } from "@/pages/MainPage/OurShowroom/OurShowroom";
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

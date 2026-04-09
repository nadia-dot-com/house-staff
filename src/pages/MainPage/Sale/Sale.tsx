import { Button } from "@/components/Button/Button";
import { categoriesGroups } from "@/data/categories";
import { getImagePath } from "@/utils/getImagePath";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";
import classes from "./Sale.module.scss";

export function Sale() {
  const { navigateToCategory } = useShoppingNavigation();

  return (
    <section className={classes.saleSection}>
      <div
        className={classes.bg}
        style={{
          backgroundImage: `url(${getImagePath("img/sale/sale-bg.webp")})`,
        }}
      />

      <div className={classes.products}>
        <div className={classes.contentLimit}>
          <div className={classes.chair}>
            <img
              src={getImagePath("img/sale/sale-chair.webp")}
              alt="sale-chair"
              width="390"
              height="454"
            />
            <span className={classes.percent}>-10%</span>
          </div>

          <div className={classes.table}>
            <img
              src={getImagePath("img/sale/table-sale.webp")}
              alt="sale-table"
              width="320"
              height="492"
            />
            <span className={classes.percent}>-20%</span>
          </div>
          <div className={classes.vase}>
            <img
              src={getImagePath("img/sale/sale-vase.webp")}
              alt="sale-vase"
              width="140"
              height="259"
            />
            <span className={classes.percent}>-20%</span>
          </div>
        </div>
      </div>

      <div className={classes.text}>
        <h1 className={classes.title}>Spring Sale</h1>
        <h2 className={classes.desc}>
          Enjoy up to <span style={{ color: "red" }}>40%</span> off a selection
          of furniture, decor, and more.
        </h2>
        <Button
          bgColor="#f54900"
          textColor="white"
          onClick={() => navigateToCategory(categoriesGroups.sale)}
          text={"• SHOP NOW"}
        />
      </div>
    </section>
  );
}
import classes from "@/pages/MainPage/Collection/Hotspot/HotspotButton/HotspotButton.module.scss";

export function HotspotButton({ onClick }: { onClick: () => void }) {
  return <button className={classes.hotspotButton} onClick={onClick} aria-label="Check the product"/>;
}

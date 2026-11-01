import { useEffect, useRef, useState } from "react";
import { HorizontalScrollButton } from "@/components/HorizontalScrollButton/HorizontalScrollButton";
import { CollectionItem } from "@/pages/MainPage/Collection/CollectionItem/CollectionItem";
import { useCollections } from "@/hooks/collection/useCollections";
import { DataLoader } from "@/components/DataLoader/DataLoader";
import { useResize } from "@/hooks/useResize";
import classes from "@/pages/MainPage/Collection/Collection.module.scss";

export function Collection() {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const { data: collections, isLoading, error } = useCollections();

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const THRESHOLD = 40;
    const { scrollLeft, scrollWidth, clientWidth } = el;

    const canScroll = scrollWidth > clientWidth + THRESHOLD;

    setIsAtStart(scrollLeft <= THRESHOLD);
    setIsAtEnd(
      !canScroll || scrollLeft + clientWidth >= scrollWidth - THRESHOLD,
    );
  };

  useResize(scrollRef, handleScroll);

  useEffect(() => {
    if (!collections) return;

    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, [collections]);

  useEffect(() => {}, [isAtStart]);

  const scroll = (direction: "left" | "right") => {
    const target = scrollRef.current;
    if (!target) return;

    const style = window.getComputedStyle(target);
    const gap = parseFloat(style.columnGap || style.gap);

    const itemWidth = target.children[0].getBoundingClientRect().width + gap;
    target.scrollBy({ left: direction === "left" ? -itemWidth : +itemWidth });
  };

  return (
    <DataLoader loading={isLoading} loaded={!!collections} error={error}>
      <section className={classes.collectionWrapper}>
        <HorizontalScrollButton
          onClick={() => scroll("left")}
          direction="left"
          disabled={isAtStart}
        />
        <ul className={classes.collection} ref={scrollRef}>
          {(collections || []).map((el) => (
            <CollectionItem key={el.id} collectionItem={el} />
          ))}
        </ul>
        <HorizontalScrollButton
          onClick={() => scroll("right")}
          direction="right"
          disabled={isAtEnd}
        />
      </section>
    </DataLoader>
  );
}

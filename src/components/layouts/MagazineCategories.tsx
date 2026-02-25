"use client";

import clsx from "clsx";

import { useRouter, useSearchParams } from "next/navigation";

import List from "../common/List";
import Button from "../common/Button";
import { magazineCategories } from "@/constants/magazineConstants";

const MagazineCategories = () => {
  const router = useRouter();
  const params = useSearchParams();
  const category = params.get("category");

  const handleFilter = (category: string) => {
    if (category) {
      router.push("?category=" + category);
    }
  };

  return (
    <List
      className="flex items-center gap-2 flex-wrap"
      items={magazineCategories}
      renderItem={(item) => {
        return (
          <li key={item.id} role="listitem">
            <Button
              size="label"
              variant="label"
              className={clsx(
                category === item.tag
                  ? "bg-primary-clr text-text-inversed-clr"
                  : "",
              )}
              onClick={() => {
                handleFilter(item.tag);
              }}
            >
              {item.tag}
            </Button>
          </li>
        );
      }}
    />
  );
};

export default MagazineCategories;

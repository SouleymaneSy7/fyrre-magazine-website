"use client";

import { useRouter } from "next/navigation";

import List from "../common/List";
import Button from "../common/Button";
import { magazineCategories } from "@/constants/magazineConstants";

const MagazineCategories = () => {
  const router = useRouter();

  const setFilter = (category: string) => {
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
              variant="label"
              size="label"
              onClick={() => {
                setFilter(item.tag);
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

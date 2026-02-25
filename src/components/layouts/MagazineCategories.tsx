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

  const handleFilter = (tag: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("category", tag);
    newParams.set("page", "1");
    router.push("?" + newParams.toString());
  };

  return (
    <List
      className="flex items-center gap-2 flex-wrap"
      items={magazineCategories}
      renderItem={(item) => (
        <li key={item.id} role="listitem">
          <Button
            size="label"
            variant="label"
            className={clsx(
              category === item.tag
                ? "bg-primary-clr text-text-inversed-clr"
                : "",
            )}
            onClick={() => handleFilter(item.tag)}
          >
            {item.tag}
          </Button>
        </li>
      )}
    />
  );
};

export default MagazineCategories;

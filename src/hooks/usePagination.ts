import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const router = useRouter();
  const params = useSearchParams();

  const currentPage = Math.max(1, Number(params.get("page") ?? 1));
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = React.useMemo(() => {
    const safePage = Math.min(currentPage, totalPages);
    return items.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage);
  }, [items, currentPage, totalPages, itemsPerPage]);

  const buildUrl = (page: number) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("page", String(page));
    return "?" + newParams.toString();
  };

  const goToPrev = () => {
    if (currentPage > 1) router.push(buildUrl(currentPage - 1));
  };

  const goToNext = () => {
    if (currentPage < totalPages) router.push(buildUrl(currentPage + 1));
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    goToPrev,
    goToNext,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages || totalPages === 0,
  };
}

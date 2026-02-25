import clsx from "clsx";

import Button from "../common/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons/Icons.component";
import { PaginationPropsType } from "@/types";
import VisuallyHidden from "../common/VisuallyHidden";

const Pagination: React.FC<PaginationPropsType> = ({
  totalPages,
  onPrev,
  onNext,
  isFirstPage,
  isLastPage,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div
      className={clsx(
        isFirstPage
          ? "flex items-center justify-start mt-10 pt-8"
          : "flex items-center justify-between mt-10 pt-8",
      )}
    >
      {!isFirstPage ? (
        <Button
          size="plain"
          variant="plain"
          onClick={onPrev}
          aria-label="Previous Magazines Page"
          className={clsx(isLastPage ? "flex-1" : "")}
        >
          <ArrowLeftIcon /> Previous
          <VisuallyHidden>Previous Magazines Page</VisuallyHidden>
        </Button>
      ) : null}

      {!isLastPage ? (
        <Button
          size="plain"
          variant="plain"
          onClick={onNext}
          aria-label="Next Magazines Page"
          className={clsx(isFirstPage ? "flex-1" : "")}
        >
          Next <ArrowRightIcon />
          <VisuallyHidden>Next Magazines Page</VisuallyHidden>
        </Button>
      ) : null}
    </div>
  );
};

export default Pagination;

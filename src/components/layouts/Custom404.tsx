import Link from "next/link";
import Button from "../common/Button";
import { ArrowRightIcon } from "@/icons/Icons.component";

const Custom404 = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="heading-2 text-primary-clr">404</p>

          <h1 className="mt-4 heading-medium uppercase text-balance text-primary-clr">
            Page not found
          </h1>

          <p className="mt-6 text-fs-text-large font-medium text-pretty text-text-muted-clr">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              variant="default"
              size="lg"
              asChild
              className="flex gap-4 items-center font-medium"
            >
              <Link href={"/"}>
                <ArrowRightIcon fill="#fff" className="-rotate-180" /> Go back
                home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Custom404;

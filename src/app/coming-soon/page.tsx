import Button from "@/components/common/Button";
import { ArrowRightIcon } from "@/icons/Icons.component";
import Link from "next/link";

export const metadata = {
  title: "Coming Soon — Fyrre Magazine",
  description: "This page is being born. Check back soon.",
};

const Page = () => {
  return (
    <main className="container | grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p
          className="heading-medium ghost-text text-primary-clr"
          aria-hidden="true"
        >
          404
        </p>

        <h1 className="mt-4 heading-large uppercase text-balance text-primary-clr">
          Oops, nothing
          <br />
          to see here… yet.
        </h1>

        <div className="mt-6 w-full max-w-(--max-width-large) mx-auto">
          <p className="text-fs-text-large font-medium text-text-muted-clr">
            This page is being born — somewhere between a spark of inspiration
            and a <strong>cold cup of coffee</strong>. We&apos;re pouring our
            heart into it (and a few sleepless nights too). ✦
          </p>

          <p className="mt-4 text-fs-text-large font-medium text-text-muted-clr">
            Check back soon — we promise it&apos;ll be <strong>worth it</strong>
            .
          </p>
        </div>

        <div className="mt-10 grid place-items-center">
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
  );
};

export default Page;

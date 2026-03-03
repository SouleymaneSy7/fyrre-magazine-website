"use client";
import * as React from "react";
import Image from "next/image";
import VisuallyHidden from "@/components/common/VisuallyHidden";
import Button from "@/components/common/Button";

const funMessages = [
  "Our printing press is warming up...",
  "Still counting the ink cartridges...",
  "The pigeons carrying your copy are on strike...",
  "We're negotiating with the paper factory...",
  "Your future copy is being hand-crafted... ✦",
];

const PrintEditionCard: React.FC = () => {
  const [clicked, setClicked] = React.useState(false);
  const [msgIndex, setMsgIndex] = React.useState(0);

  const handleClick = () => {
    setClicked(true);
    setMsgIndex((prev) => (prev + 1) % funMessages.length);
    setTimeout(() => setClicked(false), 5000);
  };

  return (
    <div className="w-full flex flex-col gap-0">
      <div className="mb-5 lg:mb-6">
        <p className="heading-6 uppercase font-semi-bold">PrintMagazine</p>
        <h3 className="heading-2">03 / 2022</h3>
      </div>

      <div className="relative w-full overflow-hidden group">
        <Image
          width={500}
          height={625}
          alt="Fyrre Magazine print edition 03/2022 — Exclusive Jacob Gronberg Interview"
          src="/assets/images/cover-image.jpeg"
          className="w-full h-full aspect-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
          sizes="(max-width: 479px) 90vw, (max-width: 991px) 100vw, 18vw"
        />
        <div className="absolute inset-0 bg-primary-clr/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3 px-6">
          <p className="text-text-inversed-clr text-fs-text-tiny font-semi-bold uppercase tracking-widest text-center">
            Exclusive Interview
          </p>

          <p className="text-text-inversed-clr text-fs-heading-4 font-semi-bold uppercase leading-heading-4 text-center">
            Jacob Gronberg
          </p>

          <hr className="w-8 border-text-inversed-clr/50" />

          <p className="text-text-inversed-clr/70 text-fs-text-tiny tracking-wide text-center">
            48 pages · Art & Design
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <Button
          size="default"
          variant="default"
          onClick={handleClick}
          aria-describedby="buy-now-status"
          className="w-full border border-primary-clr transition-all duration-300 cursor-pointer hover:bg-default-clr hover:text-text-default-clr "
        >
          {clicked ? "Coming Soon™ 👀" : "Buy Now"}
        </Button>

        <p
          id="buy-now-status"
          role="status"
          aria-live="polite"
          className="text-fs-text-regular text-text-muted-clr text-center leading-text-regular tracking-wide min-h-[1.25rem] transition-all duration-300"
        >
          {clicked ? funMessages[msgIndex] : "Coming soon — print edition"}
        </p>

        <VisuallyHidden>
          Purchase not yet available. Print edition coming soon.
        </VisuallyHidden>
      </div>
    </div>
  );
};

export default PrintEditionCard;

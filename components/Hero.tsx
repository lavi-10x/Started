"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import WordRotate from "@/components/magicui/word-rotate";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 pt-[8rem] px-7 pb-20 text-center md:items-center bg-[url(https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat dark:bg-none absolute top-0 left-0 w-full">
      <div className="relative flex flex-col gap-4 items-center justify-center lg:flex-row">
        <h1 className="relative text-3xl mx-0 max-w-[43.5rem] text-balance bg-gradient-to-br from-black from-50% to-neutral-200/60 bg-clip-text pt-5 font-semibold text-transparent sm:text-4xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-5xl lg:text-6xl dark:text-white">
          Build Beautiful
          <WordRotate
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
            words={["Websites", "Webapps", "Flyers", "Desktop Apps", "Mobile Apps"]}
          />{" "}
          With PrimeTech
        </h1>
      </div>
      <p className="max-w-xl text-balance text-center text-base tracking-tight text-black md:text-center md:text-lg dark:font-medium dark:text-white">
        <span className="font-bold text-black dark:text-white">
          React
        </span>
        ,{" "}
        <span className="font-bold text-black dark:text-white">
          Typescript
        </span>
        ,{" "}
        <span className="font-bold text-black dark:text-white">
          Tailwind CSS
        </span>
        ,{" "}
        <span className="font-bold text-black dark:text-white">
          Magic-UI
        </span>
        , and{" "}
        <span className="font-bold text-black dark:text-white">
          Framer Motion
        </span>
        .
        <br />
      </p>
      <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "gap-2 w-full whitespace-pre md:flex"
            )}
          >
            Contact us
            <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "secondary",
              }),
              "gap-2 w-full whitespace-pre md:flex"
            )}
          >
            View portfolio
            <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
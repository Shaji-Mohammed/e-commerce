"use client";

import { Headset } from "lucide-react";
import Link from "next/link";

export function BtnBorder({ name }) {
  return (
    <Link href="/contact" className="group relative flex h-9 w-fit items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md bg-zinc-800 px-2 py-2 text-sm font-medium text-white shadow transition-all duration-300 ease-out hover:bg-black/90 hover:ring-2 hover:ring-black hover:ring-offset-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex">
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
      <div className="flex items-center mx-1.5 space-x-1">
        <span className=" text-white">{name}</span>
        <Headset className="size-5" />
      </div>
    </Link>
  );
}

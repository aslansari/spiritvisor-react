'use client'

import Image from "next/image";
import { flavors } from "@/app/lib/placeholder-data.js";
import { useRouter } from 'next/navigation';
import { Chip } from "@/app/ui/chips";
import { Credit } from "@/app/ui/credit";
import { Suspense } from "react";

export default function Page(
    { params }: { params: { flavor: string; } }
) {
    const reload = useRouter();
    const flavor = params.flavor;
    const flavorData = flavors.find((f) => f.type === flavor)?.cocktails;
    const random: number = Math.floor(Math.random() * (flavorData?.length || 0)) || 0;
    const cocktail = flavorData?.[random] || {
        title: "No cocktails found",
        description: "No cocktails found",
        imageUrl: "/placeholder.jpg",
        ingredients: [""],
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <div className="mb-32 grid items-center justify-center text-center lg:max-w-5xl ">
                <div className="justify-self-center">
                    <Image
                        src={cocktail.imageUrl}
                        className="rounded-lg mt-4"
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475, '#f3f4f6'))}`}
                        alt={`${cocktail.title} picture`}
                        width={200}
                        height={250}
                    />
                </div>
                <div>
                    <h5 className="text-4xl font-bold pt-4">{cocktail.title}</h5>
                    <h5 className="text-base font-normal pt-4">{cocktail.description}</h5>
                </div>
                <div className="flex flex-row items-center justify-center space-x-1 mt-4">
                    {cocktail.ingredients.map((ingredient) => (
                        <Chip key={ingredient} title={ingredient} />
                    ))}
                </div>
                <div className="flex flex-row items-center justify-center p-8">
                    <button className="px-4 py-2 me-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg" >
                        <a href="/">Change Flavor</a>
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
                        onClick={
                            // Attempt to recover by trying to re-render the invoices route
                            () => reload.refresh()
                        }
                    >
                        <a>Suggest Another</a>
                    </button>
                </div>
            </div>
            <Credit />
        </main>
    );
}

const shimmer = (w: number, h: number, color: string) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${color}" offset="20%" />
      <stop stop-color="#FFFFFF" offset="50%" />
      <stop stop-color="${color}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${color}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
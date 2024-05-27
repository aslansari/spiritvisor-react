'use client'

import Image from "next/image";
import { flavors } from "@/app/lib/placeholder-data.js";
import { useRouter } from 'next/navigation';

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
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div className="mb-32 grid items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <div className="justify-self-center">
                    <Image
                        src={cocktail.imageUrl}
                        className="rounded-lg mt-4"
                        alt={`${cocktail.title} picture`}
                        width={200}
                        height={250}
                    />
                </div>
                <div>
                    <h5 className="text-4xl font-bold pt-4">{cocktail.title}</h5>
                    <h5 className="text-base font-normal pt-4">{cocktail.description}</h5>
                </div>
                <div>
                    <button className="px-4 py-2 mt-8 me-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg" >
                        <a href="/">Change Flavor</a>
                    </button>
                    <button
                        className="px-4 py-2 mt-8 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
                        onClick={
                            // Attempt to recover by trying to re-render the invoices route
                            () => reload.refresh()
                        }
                    >
                        <a>Suggest Another</a>
                    </button>
                </div>
            </div>
        </main>
    );
}
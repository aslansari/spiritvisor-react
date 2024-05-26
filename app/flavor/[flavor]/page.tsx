import Image from "next/image";
import { flavors } from "@/app/lib/placeholder-data.js";

export default function Page(
    { params }: { params: { flavor: string; } }
) {
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
            </div>
        </main>
    );
}
import Image from "next/image";

export default function Page(
    { params }: { params: { flavor: string; } }
) {
    const flavor = params?.flavor || "Default";
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <div>
                    <h1 className="text-4xl font-bold">Flavor is {flavor}</h1>
                </div>
            </div>
        </main>
    );
}
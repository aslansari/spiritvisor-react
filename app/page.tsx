import Image from "next/image";
import { FlavorButton } from "./ui/buttons";
import { Credit } from "@/app/ui/credit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">

      <div className="mb-22 grid text-center justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold">Spiritvisor</h1>
          <p className="text-xl mt-4">select a flavor and see which cocktail the app suggests</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 justify-between">
          <FlavorButton params={{ id: 'bitter', title: 'Bitter' }} />
          <FlavorButton params={{ id: 'sour', title: 'Sour' }} />
          <FlavorButton params={{ id: 'sweet', title: 'Sweet' }} />
          <FlavorButton params={{ id: 'savory', title: 'Savory' }} />
          <FlavorButton params={{ id: 'herbal', title: 'Herbal' }} />
          <FlavorButton params={{ id: 'fruity', title: 'Fruity' }} />
        </div>
      </div>
      <Credit />
    </main>
  );
}

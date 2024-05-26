import Image from "next/image";
import { FlavorButton } from "./ui/buttons";

export default function Home() {
  const items = ['2342', 'Jensen Huang', 'jensen@gmail.com', '$ 200', 'delivered','29 Aug 2022', 'View All of the items']

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div>
          <h1 className="text-4xl font-bold">Spiritvisor</h1>
          <p className="text-xl">select a flavor and see which cocktail the app suggests</p>
        </div>
        <div className="border grid grid-cols-3 gap-4 mt-8 justify-between">
          <FlavorButton params={ { id:'bitter', title:'Bitter' }} />
          <FlavorButton params={ { id:'sour', title:'Sour' }} />
          <FlavorButton params={ { id:'sweet', title:'Sweet' }} />
          <FlavorButton params={ { id:'savory', title:'Savory' }} />
          <FlavorButton params={ { id:'herbal', title:'Herbal' }} />
          <FlavorButton params={ { id:'fruity', title:'Fruity' }} />
        </div>
      </div>
    </main>
  );
}

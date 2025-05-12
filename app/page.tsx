import Imageslideshow from "@/components/imageslideshow";
import Link from "next/link";

export default function Home() {

  return (
    <>
    <header className="flex flex-col items-center m-auto  md:ml-7  md:mr-7 md:flex-row md:justify-center">
      <div className="  flex-1 w-fit relative justify-center flex ">
        <Imageslideshow/>
      </div>
      <div className=" flex-1 p-7 leading-[4]  h-auto ">
        <div>
            <h1 className="uppercase text-orange-500 font-medium text-2xl md:text-4xl">Next Level Food for the next level foodies</h1>
            <p className="text-xl md:text-2xl">Taste & share food from all over the world</p>
        </div>
        <div className="cta">
            <Link href={'/community'} className="text-orange-400 md:text-2xl">Join the Community</Link>
            <br />
            <Link href={'/meals'} className="bg-amber-600 py-2 px-4 font-medium rounded-md">Explore the Meals</Link>
        </div>
      </div>
    </header>
    <main>

    </main>
    </>
  );
}

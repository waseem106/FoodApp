import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";



export type paramstype = {
  params: {
    slug: string;
  };
};

async function page({ params }:paramstype) {
  const { slug } = params;
  console.log("just before api Pizza");
  const res = await fetch(`http://localhost:3000/api/meals/${slug}`);
  console.log("response", res);
  if (!res.ok) {
    notFound();
  }
  const meal = await res.json();

  return (
    <>
      <header className="my-4 mx-2 md:ml-10 md:mr-10 flex flex-col md:flex-row  gap-10 ">
        <div className="relative  w-[300px] h-[300px] md:flex-[0.5]  m-auto  rounded-md">
          <Image
            src={`${meal?.image}`}
            alt="image "
            className="rounded-md shadow-2xl"
            fill
          />
        </div>
        <div className="flex-1 md:flex-1  flex justify-center flex-col leading-[3]">
          <h1 className="text-2xl md:text-4xl font-extrabold shadow-2xl">
            {meal?.title}
          </h1>
          <p className="italic">
            by{" "}
            <a
              className="text-orange-500"
              href={`mailto:${meal?.creatorEmail}`}
            >
              {meal?.creatorName}
            </a>{" "}
          </p>
          <p className="text-gray-300">{meal?.summary}</p>
        </div>
      </header>
      <main>
        <p
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
          className="text-center mx-2 md:mx-40 bg-amber-900 
      p-5
      "
        ></p>
      </main>
    </>
  );
}

export default page;

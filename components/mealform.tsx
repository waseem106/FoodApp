"use client";
import { uploadImageToCloudinary } from "@/lib/cloudinaryUpload";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";

const MealFormSchema = z.object({
  meal: z.string().min(3, { message: "Meal should be atleast 3 characters" }),
  slug: z.string().min(3, { message: "Slug should be atleasr 3 characters" }),
  creator: z.string(),
  summary: z.string(),
  image: z.string().optional(),
});

function Mealform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [meal, setMeal] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [tempImage, setTempImage] = useState("");
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitMeal = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrl = "";
      if (imageRef.current?.files?.[0]) {
        const result = await uploadImageToCloudinary(imageRef.current.files[0]);
        console.log("result of cloudinary", result);
        imageUrl = result.secure_url;
        console.log("imageurl", imageUrl);
      }

      const mealData = {
        title: meal,
        slug,
        creatorName: name,
        creatorEmail: email,
        summary,
        instructions,
        image: imageUrl,
      };

      const res = await fetch("/api/meals", {
        method: "POST",
        body: JSON.stringify(mealData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status != 201) throw new Error("Failed to save form data");
      setLoading(false);
      router.push("/meals");
    } catch (error) {
      alert(`Failed to submit the form ${error}`);
      console.log("Error", error);
    }
  };

  const filechange = () => {
    const file = imageRef?.current;
    if (file && file.files && file.files[0]) {
      setTempImage(URL.createObjectURL(file.files[0]));
    }
  };

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
        </div>
      )}
      <form onSubmit={submitMeal} className="flex flex-col space-y-4  ">
        <div className="flex flex-col md:flex-row gap-3 ">
          <div className="w-full">
            <label className="block mb-1 text-gray-300">Your Name</label>
            <input
              type="text"
              name="Name"
              value={name}
              className="w-full  px-4 py-1 outline-2 outline-gray-400 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-gray-300">Your Email</label>
            <input
              type="text"
              name="Meal"
              value={email}
              className="w-full  px-4 py-1 outline-2 outline-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Meal</label>
          <input
            type="text"
            name="Meal"
            value={meal}
            className="w-full px-4 py-1 outline-2 outline-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            onChange={(e) => setMeal(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Slug</label>
          <input
            type="text"
            name="slug"
            value={slug}
            className="w-full px-4 py-1 outline-2 outline-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Summary</label>
          <input
            type="text"
            name="summary"
            value={summary}
            className="w-full px-4 py-1 outline-2 outline-gray-400 border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Instructions</label>
          <textarea
            name="instructions"
            value={instructions}
            className="w-full px-4 py-1 outline-2 outline-gray-400 border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter the Instructions"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Image</label>
          <input
            type="file"
            name="image"
            className="w-full px-4 py-1 outline-2 outline-gray-400 border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ref={imageRef}
            onChange={filechange}
          />
        </div>

        {tempImage && (
          <div className="relative w-[170px] h-[170px]  md:w-[200px] md:h-[200px] ">
            {tempImage && (
              <Image
                src={tempImage}
                alt="Selected Image"
                fill
                className=""
                onLoad={() => URL.revokeObjectURL(tempImage)}
              />
            )}
          </div>
        )}

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition mb-4"
        >
          Share with the community
        </button>
      </form>
    </>
  );
}

export default Mealform;

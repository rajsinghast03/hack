"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useEffect, useState } from "react";

interface RecipeOftheDayResponse {
  success: string;
  payload: {
    Recipe_title: string;
  };
}

const fetchData = async () => {
  try {
    const res = await fetch("https://apis-new.foodoscope.com/recipe/2916", {
      headers: {
        Authorization:
          "Bearer 0iukwZ9CyanPrXFMjVX7LKe8UoazZoZDDIVGFWYJq-7fCvb0",
      },
    });

    if (!res.ok) {
      throw new Error("Failed getting recipe");
    }

    const data = (await res.json()) as RecipeOftheDayResponse;
    console.log(data);
    return data.payload;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default function Home() {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const { Recipe_title, img_url, cook_time, Calories } =
          await fetchData();
        setTitle(Recipe_title);
        setImgUrl(img_url);
        console.log(img_url);
        // setTitle(payload?.);
      } catch (error) {
        // Handle the error if needed
        console.error("Error in fetchDataAndUpdateState:", error);
      }
    };

    fetchDataAndUpdateState();
  }, []);
  return (
    <>
      <h1 className="font-bold text-5xl text-center text-slate-700 mt-10 mr-4">
        Browse our choices
      </h1>
      <div className="max-w-8xl px-8">
        <HoverEffect items={categories} />
      </div>
    </>
  );
}

export const categories = [
  {
    title: "Indian",
    description:
      " Indian cuisine is known for its rich and diverse flavors, featuring a wide array of spices and herbs",
  },
  {
    title: "Chinese",
    description:
      " Chinese cuisine is diverse, with regional variations in flavors and ingredients",
  },
  {
    title: "Italian",
    description:
      " Italian cuisine is celebrated for its simplicity and emphasis on high-quality, fresh ingredients.",
  },
  {
    title: "Korean",
    description:
      "Korean cuisine is characterized by bold flavors, including the use of garlic, ginger, sesame oil, and chili peppers.",
  },
  {
    title: "Mexican",
    description:
      "Mexican cuisine is renowned for its diverse and colorful dishes. Common ingredients include corn, beans, chili peppers.",
  },
  {
    title: "Thai",
    description:
      "Thai cuisine is known for its bold and vibrant flavors, balancing sweet, sour, salty, and spicy elements",
  },
  {
    title: "Japanese",
    description:
      "Japanese cuisine places a strong emphasis on the beauty of presentation and the use of fresh, seasonal ingredients.",
  },
  {
    title: "African",
    description:
      "African cuisine is incredibly diverse, reflecting the rich cultural, geographical, and historical tapestry of the continent",
  },
];

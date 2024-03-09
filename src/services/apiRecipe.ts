const API_URL = "https://apis-new.foodoscope.com/recipe";

export async function getRecipeOftheDay(): Promise<object> {
  const res = await fetch(`${API_URL}/recipeOftheDay`, {
    headers: {
      Authorization: "Bearer 0iukwZ9CyanPrXFMjVX7LKe8UoazZoZDDIVGFWYJq-7fCvb0",
    },
  });

  if (!res.ok) throw new Error("Failed getting recipe");

  const data = await res.json();
  console.log(data.payload);
  return data.payload;
}

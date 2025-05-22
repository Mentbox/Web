import { http, HttpResponse } from "msw";

const END_POINT = import.meta.env.VITE_API_END_POINT;
const API_URI = `${END_POINT}/members`;

export const members = [
  http.patch(API_URI, async ({ request }) => {
    const body = await request.formData();

    const name = body.get("name")?.toString() || "";
    // const image = body.get("image") as File | null;

    const interests: string[] = [];
    body.getAll("interests").forEach((i) => {
      if (typeof i === "string") interests.push(i);
    });

    return HttpResponse.json({
      name,
      imageUrl: "",
      interests,
    });
  }),
];

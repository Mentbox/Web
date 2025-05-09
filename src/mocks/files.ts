import { http, HttpResponse } from "msw";
import { CreateFileParams, IFile } from "../features/files/common/types";

const END_POINT = import.meta.env.VITE_API_END_POINT;

const API_URI = `${END_POINT}/files`;

export const files = [
  http.post<never, CreateFileParams, IFile>(API_URI, async ({ request }) => {
    const { title, targetDate, materials } = await request.json();

    return HttpResponse.json({
      id: 1,
      title,
      targetDate,
      materials: materials.map((m, idx) => ({ ...m, id: idx + 1 })),
    });
  }),
];

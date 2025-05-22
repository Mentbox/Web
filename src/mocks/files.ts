import { http, HttpResponse } from "msw";
import { CreateFileParams, IFile } from "../features/files/common/types";

const END_POINT = import.meta.env.VITE_API_END_POINT;

const API_URI = `${END_POINT}/files`;

const mocks: Array<IFile> = [
  {
    id: 1,
    title: "1",
    targetDate: "2025-05-09",
    materials: [
      {
        id: 1,
        content:
          "내용을 입력하세요. 내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세",
        title: "자기소개",
        keywords: [
          "광고",
          "마케팅",
          "긍정적인_마인드",
          "어쩌구저쩌구_했던_경험을_바탕으로_이렇게_긴_키워드",
        ],
        limitedTime: "11:00",
      },
      {
        id: 2,
        content:
          "내용을 입력하세요. 내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세요.내용을 입력하세",
        title: "자기소개",
        keywords: [
          "광고",
          "마케팅",
          "긍정적인_마인드",
          "어쩌구저쩌구_했던_경험을_바탕으로_이렇게_긴_키워드",
        ],
        limitedTime: "11:00",
      },
    ],
  },
  { id: 2, title: "2", targetDate: "2025-05-09", materials: [] },
  { id: 3, title: "3", targetDate: "2025-05-09", materials: [] },
  { id: 4, title: "4", targetDate: "2025-05-09", materials: [] },
];

export const files = [
  http.get<never, never, IFile[]>(API_URI, () => {
    return HttpResponse.json(mocks);
  }),
  http.post<never, CreateFileParams, IFile>(API_URI, async ({ request }) => {
    const { title, targetDate, materials } = await request.json();

    return HttpResponse.json({
      id: 1,
      title,
      targetDate,
      materials: materials.map((m, idx) => ({ ...m, id: idx + 1 })),
    });
  }),
  http.get<
    {
      fileId: string;
    },
    never,
    IFile
  >(API_URI + "/:fileId", ({ params }) => {
    const target = mocks.find((f) => f.id === Number(params.fileId));

    if (!target) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json<IFile>(target);
  }),
];

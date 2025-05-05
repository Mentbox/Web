import { http, HttpResponse } from "msw";

const END_POINT = import.meta.env.VITE_API_END_POINT;

export const handlers = [
  http.get(`${END_POINT}/`, () => {
    return HttpResponse.json("hello world");
  }),
];

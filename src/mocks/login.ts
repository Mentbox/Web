import { http, HttpResponse } from "msw";

const API_URI = `/api/auth/login`;

export const login = [
  http.post(API_URI, async ({ request }) => {
    const { code } = (await request.json()) as { code: string };
    if (!code || typeof code !== "string") {
      return HttpResponse.json(
        { error: "Invalid authorization code" },
        { status: 400 }
      );
    }

    const fakeJwt = "kevinMockToken123";
    const fakeRefreshToken = "kevinMockRefreshToken123";

    return HttpResponse.json({
      accessToken: fakeJwt,
      refreshToken: fakeRefreshToken,
      user: {
        id: 101,
        nickname: "홍길동",
        email: "kakao@example.com",
      },
    });
  }),
];

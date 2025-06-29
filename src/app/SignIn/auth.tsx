import { useEffect } from "react";
import { useFlow } from "@stackflow/react/future";
import { ActivityComponentType } from "@stackflow/react";

const AuthCallback: ActivityComponentType = () => {
  const { replace } = useFlow();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      (async () => {
        try {
          const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
          });

          const data = await res.json();
          console.log("로그인 성공:", data);

          // 토큰 저장 및 리디렉션
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          replace("SignInScreen", {});
        } catch (err) {
          console.error("카카오 로그인 실패", err);
        }
      })();
    }
  }, []);

  return <div>로그인 처리 중입니다...</div>;
};

export default AuthCallback;

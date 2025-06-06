import { useEffect, useRef } from "react";
import LoginButton from "../../../components/LoginButton";
import google from "@icons/google.svg";
import { useFlow } from "@stackflow/react/future";

const SocialGoogle = () => {
  const { replace } = useFlow();
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_KEY;
  const tokenClientRef = useRef<google.accounts.oauth2.TokenClient | null>(
    null
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google && googleClientId) {
        tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
          client_id: googleClientId,
          scope: "openid email profile",
          callback: handleTokenResponse,
        });
      }
    };
    document.body.appendChild(script);
  }, [googleClientId]);

  const handleLogin = () => {
    if (!tokenClientRef.current) {
      alert("Google 로그인 초기화 실패");
      return;
    }
    tokenClientRef.current.requestAccessToken(); // 명시적 팝업 실행
  };

  const handleTokenResponse = (
    response: google.accounts.oauth2.TokenResponse
  ) => {
    console.log("Access Token:", response.access_token);

    replace("SignInScreen", {});
  };

  return (
    <LoginButton
      src={google}
      color="white"
      className="border-[1px] border-black"
      onClick={handleLogin}
    >
      Google로 로그인
    </LoginButton>
  );
};

export default SocialGoogle;

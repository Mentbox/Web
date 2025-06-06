import LoginButton from "../../../components/LoginButton";
import kakao from "@icons/kakao.svg";

// 카카오 로그인
const SocialKakao = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEY; // REST API KEY
  const redirect_uri = "http://localhost:5173/auth"; // Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <LoginButton src={kakao} color="#FEE500" onClick={handleLogin}>
        카카오 로그인
      </LoginButton>
    </>
  );
};

export default SocialKakao;

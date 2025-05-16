import LoginButton from "../../components/LoginButton";
import apple from "@icons/apple.svg";

interface ClientConfig {
  clientId: string;
  redirectURI: string;
  scope?: string;
  state?: string;
  nonce?: string;
  usePopup?: boolean;
}
interface Authorization {
  code: string;
  id_token: string;
  state?: string;
}

interface User {
  email: string;
  name: string;
}

interface SigninResponse {
  authorization: Authorization;
  user?: User;
}

declare global {
  interface Window {
    AppleID: {
      auth: {
        init: (config: ClientConfig) => void;
        signIn: (config?: ClientConfig) => Promise<SigninResponse>;
      };
    };
  }
}

/* @TODO : 애플 로그인 로직 구현 완료 -> 디벨로퍼 유료 가입 필요, 가입 후 설정 */
export const SocialApple = () => {
  const appleLogin = async () => {
    window.AppleID.auth.init({
      clientId: "serviceID 생성 시 identifier 등록",
      scope: "email name",
      redirectURI: "redirect url",
      state: "임의의 문자열",
      nonce: "임의의 숫자",
      usePopup: false,
    });

    try {
      const res = await window.AppleID.auth.signIn();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginButton src={apple} color="#000000" onClick={appleLogin}>
        Apple로 로그인
      </LoginButton>
    </>
  );
};

export default SocialApple;

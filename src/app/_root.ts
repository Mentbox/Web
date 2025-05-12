import "@stackflow/plugin-basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import HomeScreen from "./home";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import ProfileScreen from "./profile";
import LoginScreen from "./SignIn/login";
import AuthCallback from "./SignIn/auth";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    HomeScreen,
    ProfileScreen,
    LoginScreen,
    AuthCallback,
  },
  initialActivity: () => "HomeScreen",
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes: {
        HomeScreen: "/",
        ProfileScreen: "/profile",
        LoginScreen: "/login",
        AuthCallback: "/auth",
      },
      fallbackActivity: () => "HomeScreen",
    }),
  ],
});

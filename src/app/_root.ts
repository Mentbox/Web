import "@stackflow/plugin-basic-ui/index.css";
import { stackflow, useActions } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import HomeScreen from "./home";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import ProfileScreen from "./profile";
import LoginScreen from "./SignIn/login";
import AuthCallback from "./SignIn/auth";
import FilesScreen from "./files";
import WriteFileScreen from "./files/write";
import FileDetailsScreen from "./files/[fileId]";

export type TypeActivities = typeof activities;

export const useRouter = () => {
  return useActions<TypeActivities>();
};

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  activities: {
    HomeScreen,
    ProfileScreen,
    LoginScreen,
    AuthCallback,
    FilesScreen,
    WriteFileScreen,
    FileDetailsScreen,
  },
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
        FilesScreen: "/files",
        WriteFileScreen: "/files/write",
        FileDetailsScreen: "/files/:fileId",
      },
      fallbackActivity: () => "HomeScreen",
    }),
  ],
});

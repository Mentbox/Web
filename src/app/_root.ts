import "@stackflow/plugin-basic-ui/index.css";
import { stackflow, useActions } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import HomeScreen from "./home";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import FilesScreen from "./files";
import WriteFileScreen from "./files/write";
import FileDetailsScreen from "./files/[fileId]";
import ProfileScreen from "./profile";
import LoginScreen from "./SignIn/login";
import AuthCallback from "./SignIn/auth";
import RecordingsScreen from "./recordings";
import RecordingPracticeScreen from "./recordings/[fileId]/practice";
import RecordingResultScreen from "./recordings/[fileId]/result";
import SignInScreen from "./SignIn/signIn";

export type TypeActivities = typeof activities;

export const useRouter = () => {
  return useActions<TypeActivities>();
};

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  activities: {
    HomeScreen,
    FilesScreen,
    WriteFileScreen,
    FileDetailsScreen,
    ProfileScreen,
    LoginScreen,
    AuthCallback,
    RecordingsScreen,
    RecordingPracticeScreen,
    RecordingResultScreen,
    SignInScreen,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes: {
        HomeScreen: "/",
        FilesScreen: "/files",
        WriteFileScreen: "/files/write",
        FileDetailsScreen: "/files/:fileId",
        ProfileScreen: "/profile",
        LoginScreen: "/login",
        AuthCallback: "/auth",
        RecordingsScreen: "/recordings",
        RecordingPracticeScreen: "/recordings/:fileId/practice",
        RecordingResultScreen: "/recordings/:fileId/result",
        SignInScreen: "/sign-in",
      },
      fallbackActivity: () => "HomeScreen",
    }),
  ],
});

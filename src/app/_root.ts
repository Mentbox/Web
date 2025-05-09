import "@stackflow/plugin-basic-ui/index.css";
import { stackflow, useActions } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import HomeScreen from "./home";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import FilesScreen from "./files";
import WriteFileScreen from "./files/write";

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
      },
      fallbackActivity: () => "HomeScreen",
    }),
  ],
});

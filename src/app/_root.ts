import "@stackflow/plugin-basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import HomeScreen from "./home";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import TestScreen from "./test";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    HomeScreen,
    TestScreen,
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
        TestScreen: "/test",
      },
      fallbackActivity: () => "HomeScreen",
    }),
  ],
});

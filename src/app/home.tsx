import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

const HomeScreen: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "home" }}>
      <div>home</div>
    </AppScreen>
  );
};

export default HomeScreen;

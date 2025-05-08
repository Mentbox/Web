import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

const TestScreen: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "home" }}>
      <div>test</div>
    </AppScreen>
  );
};

export default TestScreen;

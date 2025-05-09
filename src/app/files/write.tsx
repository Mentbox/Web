import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";

const WriteFileScreen: ActivityComponentType = () => {
  return (
    <AppScreen>
      <div className="screen">
        <Header.Arrow title="파일 작성" />
      </div>
    </AppScreen>
  );
};

export default WriteFileScreen;

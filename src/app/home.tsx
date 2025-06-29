import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { Button } from "../components/Button";
import { useRouter } from "./_root";

const HomeScreen: ActivityComponentType = () => {
  const { push } = useRouter();

  return (
    <AppScreen appBar={{ title: "home" }}>
      <div className="screen flex flex-col gap-5 p-5">
        <Button onClick={() => push("FilesScreen", {})}>파일</Button>
        <Button onClick={() => push("RecordingsScreen", {})}>연습</Button>
      </div>
    </AppScreen>
  );
};

export default HomeScreen;

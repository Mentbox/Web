import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";
import getTheme from "../../common/styles/theme";
import { useRouter } from "../_root";
import FileList from "../../features/files/modules/FileList";

const FilesScreen: ActivityComponentType = () => {
  const theme = getTheme();
  const { push } = useRouter();

  const handleCreateClick = () => {
    push("WriteFileScreen", {});
  };

  return (
    <AppScreen backgroundColor={theme.gray[50]}>
      <div className="screen">
        <Header.Arrow title="파일 관리" />

        <main className="flex-1 flex flex-col">
          <FileList />
        </main>

        <section className="px-[16px] py-[16px] pb-[40px] flex flex-col">
          {/** @todo Btn 컴포넌트로 교체  */}
          <button onClick={handleCreateClick} className="bg-primary p-5">
            파일 추가
          </button>
        </section>
      </div>
    </AppScreen>
  );
};

export default FilesScreen;

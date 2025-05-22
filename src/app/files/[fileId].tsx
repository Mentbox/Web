import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";
import AsyncBoundary from "../../features/core/modules/AsyncBoundary";
import FileDetails from "../../features/files/modules/FileDetails";
import FileMaterialList from "../../features/files/modules/FileMaterialList";
import FileEditBtn from "../../features/files/modules/FileEditBtn";

type Params = {
  fileId: number;
};

const FileDetailsScreen: ActivityComponentType<Params> = ({
  params,
}: {
  params: Params;
}) => {
  const { fileId } = params;

  return (
    <AppScreen>
      <div className="screen">
        <Header.Arrow title="파일 관리" />

        <AsyncBoundary>
          <main className="flex-1 flex flex-col gap-[24px] p-[16px] overflow-y-scroll">
            <FileDetails fileId={fileId} />

            <FileMaterialList fileId={fileId} />
          </main>

          <div className="p-4 pb-8">
            <FileEditBtn fileId={fileId} />
          </div>
        </AsyncBoundary>
      </div>
    </AppScreen>
  );
};

export default FileDetailsScreen;

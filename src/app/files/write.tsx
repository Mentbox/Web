import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";
import WriteFileNameForm from "../../features/files/modules/WriteFileNameForm";
import WriteFileDateSelector from "../../features/files/modules/WriteFileDateSelector";

const WriteFileScreen: ActivityComponentType = () => {
  return (
    <AppScreen>
      <div className="screen">
        <Header.Arrow title="파일 작성" />

        <main className="flex-1 flex flex-col gap-[24px] p-[16px]">
          <WriteFileNameForm />

          <WriteFileDateSelector />
        </main>

        <section className="px-[16px] py-[16px] pb-[40px] flex flex-col">
          {/** @todo Btn 컴포넌트로 교체 */}
          <button className="p-5 bg-primary">저장</button>
        </section>
      </div>
    </AppScreen>
  );
};

export default WriteFileScreen;

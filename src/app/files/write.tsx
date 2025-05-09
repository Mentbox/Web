import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";
import WriteFileNameForm from "../../features/files/modules/WriteFileNameForm";

const WriteFileScreen: ActivityComponentType = () => {
  return (
    <AppScreen>
      <div className="screen">
        <Header.Arrow title="파일 작성" />

        <main className="flex-1 flex flex-col p-[16px]">
          <WriteFileNameForm />
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

import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";
import WriteFileDateSelector from "../../features/files/modules/WriteFileDateSelector";
import { useState } from "react";
import WriteFileTitleForm from "../../features/files/modules/WriteFileTitleForm";
import WriteFileMaterialList from "../../features/files/modules/WriteFileMaterialList";

const WriteFileScreen: ActivityComponentType = () => {
  const [form, setForm] = useState<{
    title: string;
    date: Date | null;
    materials: Array<{
      title: string;
      content: string;
      keywords: string[];
      limitedTime: string;
    }>;
  }>({
    title: "",
    date: null,
    materials: [],
  });

  const updateForm = <T extends keyof typeof form>(
    key: T,
    value: (typeof form)[T]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <AppScreen>
      <div className="screen">
        <Header.Arrow title="파일 관리" />

        <main className="flex-1 flex flex-col gap-[24px] p-[16px] overflow-y-scroll">
          <WriteFileTitleForm
            title={form.title}
            setTitle={(title) => updateForm("title", title)}
          />

          <WriteFileDateSelector
            date={form.date}
            setDate={(date) => updateForm("date", date)}
          />

          <WriteFileMaterialList
            materials={form.materials}
            setMaterials={(by) => updateForm("materials", by)}
          />
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

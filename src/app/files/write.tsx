import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";
import WriteFileDateSelector from "../../features/files/modules/WriteFileDateSelector";
import WriteFileTitleForm from "../../features/files/modules/WriteFileTitleForm";
import WriteFileMaterialList from "../../features/files/modules/WriteFileMaterialList";
import useCreateFileMutation from "../../features/files/hooks/mutations/useCreateFileMutation";
import DateUtil from "../../utils/DateUtils";
import useToast from "../../features/core/hooks/useToast";
import { useRouter } from "../_root";
import useFileForm from "../../features/files/hooks/useFileForm";
import useUpdateFileMutation from "../../features/files/hooks/mutations/useUpdateFileMutation";

type Params = {
  fileId?: number;
};

const WriteFileScreen: ActivityComponentType<Params> = ({
  params,
}: {
  params: Params;
}) => {
  const { fileId } = params;
  const { pop } = useRouter();
  const { showToast } = useToast();

  const createFile = useCreateFileMutation();
  const updateFile = useUpdateFileMutation();

  const { form, disabled, updateForm } = useFileForm(fileId);

  const handleConfirm = () => {
    const { title, date, materials } = form;
    if (!title || !date) return;

    const isEdit = !!fileId;

    if (isEdit) {
      updateFile(
        {
          fileId,
          title,
          targetDate: DateUtil.format(date),
          materials,
        },
        {
          onSuccess: () => {
            showToast("파일을 수정했어요!");
            pop();
          },
        }
      );
    } else {
      createFile(
        { title, targetDate: DateUtil.format(date), materials },
        {
          onSuccess: () => {
            showToast("파일을 만들었어요!");
            pop();
          },
        }
      );
    }
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
          <button
            onClick={handleConfirm}
            disabled={disabled}
            className="p-5 bg-primary"
          >
            저장
          </button>
        </section>
      </div>
    </AppScreen>
  );
};

export default WriteFileScreen;

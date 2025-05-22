import { useQueryClient } from "@tanstack/react-query";
import { IFile } from "../common/types";
import { useState } from "react";

function useFileForm(fileId?: number) {
  const queryClient = useQueryClient();
  const file = queryClient.getQueryData<IFile>(["file", fileId]);

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
    title: file?.title ?? "",
    date: file?.targetDate ? new Date(file.targetDate) : null,
    materials: file?.materials ?? [],
  });
  const disabled = !form.title || !form.date;

  const updateForm = <T extends keyof typeof form>(
    key: T,
    value: (typeof form)[T]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return { form, updateForm, disabled };
}

export default useFileForm;

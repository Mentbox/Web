export type IMaterial = {
  title: string;
  content: string;
  keywords: string[];
  limitedTime: string;
};

export type CreateFileParams = {
  title: string;
  targetDate: string;
  materials: IMaterial[];
};

export type IFile = {
  id: number;
  title: string;
  targetDate: string;
  materials: Array<IMaterial & { id: number }>;
};

export type UpdateFileParams = CreateFileParams & {
  fileId: number;
};

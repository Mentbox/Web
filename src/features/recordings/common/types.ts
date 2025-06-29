export type CreateRecordingParams = {
  fileId: number;
  voiceFile: File;
  feedback: string;
  score: number;
  isRandom: boolean;
};

export type IRecording = {
  id: number;
  fileId: number;
  score: number;
  voiceFile: File;
  feedback: string;
  isRandom: boolean;
  createdAt: string;
};

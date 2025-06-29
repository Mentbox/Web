import api from "../../../common/api";
import { CreateRecordingParams, IRecording } from "./types";

const client = api.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/recordings`,
}));

export async function createRecording(params: CreateRecordingParams) {
  const { fileId, ...body } = params;

  const res = await client.post<IRecording>(`${fileId}`, { json: body }).json();

  return res;
}

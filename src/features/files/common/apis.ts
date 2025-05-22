import api from "../../../common/api";
import { CreateFileParams, IFile, UpdateFileParams } from "./types";

const client = api.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/files`,
}));

export async function getFiles() {
  const res = await client.get<IFile[]>("").json();

  return res;
}

export async function createFile(params: CreateFileParams) {
  const { ...body } = params;

  const res = await client.post<IFile>("", { json: body }).json();

  return res;
}

export async function getFile(fileId: number) {
  const res = await client.get<IFile>(`${fileId}`).json();

  return res;
}

export async function updateFile(params: UpdateFileParams) {
  const { fileId, ...body } = params;

  const res = await client.put<IFile>(`${fileId}`, { json: body }).json();

  return res;
}

export async function removeFile(fileId: number) {
  const res = await client.delete<null>(`${fileId}`).json();

  return res;
}

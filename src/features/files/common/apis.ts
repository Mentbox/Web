import api from "../../../common/api";
import { CreateFileParams, IFile } from "./types";

const client = api.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/files`,
}));

export async function getFiles() {
  const res = await client.get<IFile[]>("").json();

  return res;
}

export async function createFile(params: CreateFileParams) {
  const { ...body } = params;

  const res = await client.post<IFile[]>("", { json: body }).json();

  return res;
}

import api from "../../../common/api";
import { CreateFileParams } from "./types";

const client = api.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/files`,
}));

export async function createFile(params: CreateFileParams) {
  const { ...body } = params;

  const res = await client.post("", { json: body }).json();

  return res;
}

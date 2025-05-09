import api from "../../../common/api";
import { IUser, UpdateProfileParams } from "./types";

const client = api.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/members`,
}));

export async function updateProfile(params: UpdateProfileParams) {
  const { image, name, interests } = params;

  const formData = new FormData();

  if (image) formData.append("image", image);
  if (name) formData.append("name", name);
  interests?.forEach((i) => formData.append("interests", i));

  const res = await client.patch<IUser>("", { body: formData }).json();

  return res;
}

import { files } from "./files";
import { login } from "./login";
import { members } from "./members";

export const handlers = [...members, ...login, ...files];

import { login } from "./login";
import { members } from "./members";
import { files } from "./files";

export const handlers = [...members, ...login, ...files];
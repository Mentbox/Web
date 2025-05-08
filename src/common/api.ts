import ky from "ky";

const API_END_POINT = import.meta.env.VITE_API_END_POINT;

const api = ky.extend({
  prefixUrl: API_END_POINT,
});

export default api;

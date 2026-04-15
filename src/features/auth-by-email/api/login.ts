import type { User } from "../../../entities/user/model/types";
import { $api } from "../../../shared/api/base";
import { API_ENDPOINTS } from "../../../shared/api/endpoints";
import type { LoginDTO } from "../model/loginSchema";

export const loginByEmail  = async (data: LoginDTO): Promise<User> => {
  const response = await $api.post<User>(API_ENDPOINTS.LOGIN, data);
  return response.data;
}
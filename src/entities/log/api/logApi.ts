import { $api } from "@/shared/api/base"
import { API_ENDPOINTS } from "./endpoints"

interface LogParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string | null;
}

export const fetchLogs = async(params: LogParams): Promise<any> => {
  const resp = await $api.get(API_ENDPOINTS.LOGS, { params });
  return resp.data;
}
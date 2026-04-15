import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchLogs } from "../api/logApi";
import { useAppLoaderStore } from "@/entities/app-loader";
import { useEffect } from "react";
import { useLogParamsStore } from "@/pages/Logs/model/useLogParamsStore";

export const useLogs = () => {
  const showLoader = useAppLoaderStore((state) => state.setLoading);
  const params = useLogParamsStore();

  const query = useQuery({
    queryKey: ['logs', params.page, params.limit, params.search, params.sortBy],
    queryFn: () => fetchLogs({
      page: params.page,
      limit: params.limit,
      search: params.search,
      sortBy: params.sortBy
    }),
    placeholderData: keepPreviousData
  })

  useEffect(() => {
    showLoader(query.isFetching);
  }, [query.isFetching]);

  return query;
}
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchLogs } from "../api/logApi";
import { useAppLoaderStore } from "@/entities/app-loader";
import { useEffect } from "react";
import { useLogParamsStore } from "@/pages/Logs/model/useLogParamsStore";

export const useLogs = () => {
  const showLoader = useAppLoaderStore((state) => state.setLoading);
  const { page, limit, search, sortBy } = useLogParamsStore();
  const fetchParams = { page, limit, search, sortBy };

  const query = useQuery({
    queryKey: ['logs', fetchParams],
    queryFn: () => fetchLogs(fetchParams),
    placeholderData: keepPreviousData
  })

  useEffect(() => {
    showLoader(query.isFetching);
  }, [query.isFetching]);

  return query;
}
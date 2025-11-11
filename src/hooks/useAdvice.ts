// src/hooks/useAdvice.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdvice } from "../services/adviceApi";

export const useAdvice = () =>
  useQuery({
    queryKey: ["advice"],
    queryFn: fetchAdvice,
    retry: 1,
    staleTime: 0, 
    refetchOnWindowFocus: false,
  });

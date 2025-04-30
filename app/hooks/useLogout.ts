import { useCallback } from "react";
import { toast } from "./use-toast";
import { useFetcher } from "react-router";

export function useLogout() {
  const fetcher = useFetcher();

  const logout = useCallback(() => {
    fetcher.submit(null, { method: "post", action: "/api/logout" });

    toast({
      title: "Logged out",
      description: "You have been logged out",
      variant: "default",
    });
  }, [fetcher]);

  return logout;
}

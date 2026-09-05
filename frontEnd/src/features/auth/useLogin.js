import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiLogin";

export function useLogin() {
  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {},
  });

  return { login, isLoading, error };
}

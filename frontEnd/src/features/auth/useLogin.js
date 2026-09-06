import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();


  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      // console.log(data.data.data.user);
      queryClient.setQueryData(["user"], data.data.data.user);
      toast.success("logged in correctly");
      navigate("/", { replace: true });
      // window.location.replace("/");
    },
    onError: () => {
      toast.error("Incorrect email or password ");
    },
  });

  return { login, isLoading, error };
}

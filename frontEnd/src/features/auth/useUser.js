import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
// import { useIsLoggedIn } from "../../contexts/isLoggedInContext";

export function useUser() {
  // const { isLoggedIn } = useIsLoggedIn();

  function placeholder() {
    return;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    onSuccess: () => {},
  });

  // console.log(data);
  return { data, isLoading, error };
}

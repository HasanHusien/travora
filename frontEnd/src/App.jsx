import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";

import AppLayout from "./pages/AppLayout";
import Overview from "./pages/OverView";
import Tour from "./pages/Tour";
import Login from "./features/auth/Login";
import { UserProvider } from "./contexts/userContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Overview />} />
              <Route path="/tour/:slug" element={<Tour />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
          <Toaster position="top-center" reverseOrder={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;

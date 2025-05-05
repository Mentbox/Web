import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "./app/_root";
import queryClient from "./common/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

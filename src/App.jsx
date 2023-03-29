import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Campus } from "./components/Campus";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Campus />
      </div>
    </QueryClientProvider>
  );
};

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutRoad } from "./components/AboutRoad";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AboutRoad />
      </QueryClientProvider>
    </div>
  );
};

export default App;

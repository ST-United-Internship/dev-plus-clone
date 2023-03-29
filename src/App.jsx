import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutRoad } from "./components/AboutRoad";
import HomeBanner from "./components/HomeBanner";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <HomeBanner />
        <AboutRoad />
      </QueryClientProvider>
    </div>
  );
};

export default App;

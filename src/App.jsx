import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default App;

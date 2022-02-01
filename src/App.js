import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools'

import "./sass/Main.scss";
import Home from "./View/Pages/Home";

function App() {

  const queryClient = new QueryClient()

  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Home/>
      <ReactQueryDevtools/>
      </QueryClientProvider>
    </div>
  );
}

export default App;

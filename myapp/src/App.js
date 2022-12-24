import './App.css';
import Practice from './components/Practice';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider,} from 'react-query'
import Usecallback from './components/Usecallback';
const queryClient = new QueryClient()

function App() {
  return (
    <>
    <Usecallback/>
      {/* <QueryClientProvider client={queryClient}>
      <Practice/>
      
      <Routes>
      <Route path='Login' element={<Login/>}/>
    </Routes>
    </QueryClientProvider> */}
    </>
    
  );
}

export default App;

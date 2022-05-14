import { ChakraProvider } from '@chakra-ui/react';
import Home from '@pages/Home';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Tasks from '@pages/Tasks';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

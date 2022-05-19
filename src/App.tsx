import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

import { ChakraProvider } from '@chakra-ui/react';
import Home from '@pages/Home';
import Tasks from '@pages/Tasks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import theme from './theme';

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

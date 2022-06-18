import { useState } from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Context from 'contexts';
import { AppWrapper } from './App.styles';
import Loading from 'components/loading';

const theme = {
    background: {
        app: 'transparent',
    }
};

const App = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
        <Context.Provider value={{setIsLoading}}>
            <AppWrapper>
              {isLoading && <Loading />}
              <BrowserRouter>
                <Routes>
                    <Route path="example" element={<h2>Example Path</h2>} />
        <Route path="user" element={<h2>User example path <a href="/user/4">Example route based on 'id' path variable</a></h2>} />
                    <Route path=":id" element={<h2>Example path variable {id}</h2>} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
              </BrowserRouter>
              <ul>
                <li><a href="/example">Example Route</a></li>
                <li><a href="/user">User path</a></li>
                <li><a href="/user/4">Example route based on 'id' path variable</a></li>
              </ul>
            </AppWrapper>
        </Context.Provider>
        </ThemeProvider>
    );
}

export default App;

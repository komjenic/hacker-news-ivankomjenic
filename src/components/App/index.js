import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from '../../styles/palette';
import List from '../../components/List/index';

import { Wrapper, Title } from './styles';

function App() {
    return (
        <ThemeProvider theme={colorsDark}>
            <div>
                <Wrapper>
                    <Title>Hacker News Ivan Komjenic</Title>
                    <List />
                </Wrapper>
            </div>
        </ThemeProvider>
    );
}

export default App;

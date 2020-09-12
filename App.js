import React from 'react';

import Routes from './src/routes'
import ThemeProvider from './src/context/theme';

const App = () => {

  return(
    <ThemeProvider >
        <Routes />
    </ThemeProvider>
    ) 
}

export default App;

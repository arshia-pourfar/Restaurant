// import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css'
// import Main from './App';

// const home = createRoot(document.getElementById('root'));
// home.render(
//     <StrictMode>
//         <Main />
//     </StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);